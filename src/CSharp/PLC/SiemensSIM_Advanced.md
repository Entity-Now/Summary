# 西门子仿真使用的坑

| 软件 | 版本 |
| --- | --- |
| TIA Portal | V17 |
| WinPcap | 4.1.3  |
| S7-PLCSIM | 3.0 |
| 仿真CPU 1515-2 PN | 固件版本2.8 |

## IP设置

1. 打开控制面板，搜索*设置PG/PC接口*\，选中虚拟网卡，然后选择Siemens PLCSIM Virtual Ethernet Adapter.TCPIP.1
    ![设置PG/PC接口](/PLC/PG_PC.png)
2. 打开网络和共享中心，选择更改适配器设置，选中Siemens PLCSIM Virtual Ethernet Adapter.右键属性，选择Internet协议版本4(TCP/IPv4)，点击属性，选择使用下面的IP地址，设置IP地址为xxx.xxx.xxx.xxx(和网卡在一个网段才行)，子网掩码为xxx.xxx.xxx.0，默认网关为空，DNS服务器为空
    ![设置PG/PC接口](/PLC/VLAN.png)
    ![设置PG/PC接口](/PLC/IPV4.png)
3. 勾选真实网卡，点击属性，选择Siemens PLCSIM Virtual Switch，点击确定
    ![设置PG/PC接口](/PLC/VirtualSwitch.png)


## 仿真CPU设置

1. 打开PLCSIM
2. TCP/IP communication，选择local或者网卡
3. Instance Name输入一个名字
4. IP Address输入xxx.xxx.xxx.xxx(和网卡在一个网段才行)
5. Subnet Mask输入xxx.xxx.xxx.0(和网卡一样才行)
6. PLC Type 选择 cup 1500
> 启动后，第一个信号灯是黄色代表正常，如果第二个灯闪红色，说明ip没设置好

![设置PG/PC接口](/PLC/PLCSIM_Advanced.png)

## 博图相关设置
1. 设置项目属性，开启*块编译时支持仿真*
![开启块编译时支持仿真](/PLC/allow_simulation.png)
2. 添加CPU，选择CPU 1515-2 PN，建议查看固件版本，固件版本2.8
![添加CPU](/PLC/firmware.png)
3. 开启允许远程的PUT/GET访问
![允许远程的PUT/GET访问](/PLC/allow_get.png)
4. 设置CUP的IP地址，和仿真CPU的IP地址一样
![允许远程的PUT/GET访问](/PLC/plc_network.png)
5. 关闭DB块的优化设置，否则无法查看地址偏移量
![允许远程的PUT/GET访问](/PLC/optimize.png)