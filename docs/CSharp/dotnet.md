# dotnet 命令行

## 打包工具
> dotnet-warp
```sh
# install
dotnet tool install --global dotnet-warp
```
> 打包
> 使用-p
```sh
dotnet-warp -p:Platform:x64
```

## 发布 publish
> -p:Platform=指定发布的版本，否则会报AnyCUP的错误
```sh
dotnet publish -r win10-x64 -c Release --self-contained -p:Platform=x64
```