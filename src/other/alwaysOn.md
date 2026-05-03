# always on

## 需用到的ip
| ip | 名称 | 用途 |
| --- | --- | --- |
| 10.111.100.5 | WIN-100 | 主要服务器 |
| 10.111.100.8 | WIN-101 | 辅助服务器 |
| 10.111.100.9 | alwaysOn | 集群虚拟IP |
| 10.111.100.10 | mk-sql | 监听器IP(不清楚有何用) |

## 要求
1. 账户密码必须相同
1. 防火墙放行
1. 关闭ipv6
1. dns 配置为集群ip
1. 还要定义侦听器（暂不清楚怎么使用）


## win-100 证书
```sql
-- 服务器 win-100
USE master;
GO

-- 删除已有的证书（如果存在）
IF EXISTS (SELECT * FROM sys.certificates WHERE name = 'CERT1')
BEGIN
    DROP CERTIFICATE CERT1;
END
GO

-- 删除已有的终结点（如果存在）
IF EXISTS (SELECT * FROM sys.endpoints WHERE name = 'group0_endpoint')
BEGIN
    DROP ENDPOINT [group0_endpoint];
END
GO

-- 删除已有的主密钥（如果存在）
IF EXISTS (SELECT * FROM sys.symmetric_keys WHERE name = '##MS_DatabaseMasterKey##')
BEGIN
    DROP MASTER KEY;
END
GO

# 
```

### 安装证书（最后一行代码可是共享文件夹的路径）
```sql
-- 服务器 win-100
USE master;
GO

-- 创建主密钥
CREATE MASTER KEY ENCRYPTION BY PASSWORD = '123.abc';
GO

-- 创建证书，确保每台机器上的证书名称唯一
CREATE CERTIFICATE WIN_100_CERT WITH SUBJECT = 'WIN_100_CERT', START_DATE = '2017-01-01', EXPIRY_DATE = '2099-12-30';
GO

-- 备份证书到文件，确保路径存在并有写入权限
BACKUP CERTIFICATE WIN_100_CERT TO FILE = 'C:\gdmk\WIN_100_CERT.cer';
GO

-- 创建终结点，设为证书验证
CREATE ENDPOINT [group0_endpoint] AUTHORIZATION [sa] STATE=STARTED AS TCP (LISTENER_PORT = 5022, LISTENER_IP = ALL)
    FOR DATA_MIRRORING (ROLE = ALL, AUTHENTICATION = CERTIFICATE WIN_100_CERT, ENCRYPTION = REQUIRED ALGORITHM AES);
GO

-- 载入其他节点证书
CREATE CERTIFICATE WIN_101_CERT FROM FILE = 'C:\gdmk\WIN_101_CERT.cer';
GO

```


## win-101 证书

```sql
-- 服务器 win-101
USE master;
GO

-- 删除已有的证书（如果存在）
IF EXISTS (SELECT * FROM sys.certificates WHERE name = 'CERT2')
BEGIN
    DROP CERTIFICATE CERT1;
END
GO

-- 删除已有的终结点（如果存在）
IF EXISTS (SELECT * FROM sys.endpoints WHERE name = 'group0_endpoint')
BEGIN
    DROP ENDPOINT [group0_endpoint];
END
GO

-- 删除已有的主密钥（如果存在）
IF EXISTS (SELECT * FROM sys.symmetric_keys WHERE name = '##MS_DatabaseMasterKey##')
BEGIN
    DROP MASTER KEY;
END
GO

```
### 安装证书（最后一行代码可是共享文件夹的路径）
```

-- 服务器 win-101
USE master;
GO

-- 创建主密钥
CREATE MASTER KEY ENCRYPTION BY PASSWORD = '123.abc';
GO

-- 创建证书，确保每台机器上的证书名称唯一
CREATE CERTIFICATE WIN_101_CERT WITH SUBJECT = 'WIN_101_CERT', START_DATE = '2017-01-01', EXPIRY_DATE = '2099-12-30';
GO

-- 备份证书到文件，确保路径存在并有写入权限
BACKUP CERTIFICATE WIN_101_CERT TO FILE = 'C:\gdmk\WIN_101_CERT.cer';
GO

-- 创建终结点，设为证书验证
CREATE ENDPOINT [group0_endpoint] AUTHORIZATION [sa] STATE=STARTED AS TCP (LISTENER_PORT = 5022, LISTENER_IP = ALL)
    FOR DATA_MIRRORING (ROLE = ALL, AUTHENTICATION = CERTIFICATE WIN_101_CERT, ENCRYPTION = REQUIRED ALGORITHM AES);
GO

-- 载入其他节点证书
CREATE CERTIFICATE WIN_100_CERT FROM FILE = 'C:\gdmk\WIN_100_CERT.cer';
GO

```