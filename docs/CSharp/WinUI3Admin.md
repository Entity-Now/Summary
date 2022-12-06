# 以管理员方式运行进程

## app.manifest
> app.manifest里面配置这两个属性
```xml
<package>
    <Capabilities>
        <rescap:Capability Name="runFullTrust" />
        <rescap:Capability Name="allowElevation" />
  </Capabilities>
</package>
```

## package.appxmanifest
> package.appxmanifest里面配置
```xml
<assembly>
	<trustInfo xmlns="urn:schemas-microsoft-com:asm.v2">
		<security>
			<requestedPrivileges xmlns="urn:schemas-microsoft-com:asm.v3">
				<!-- UAC 清单选项
             如果想要更改 Windows 用户帐户控制级别，请使用
             以下节点之一替换 requestedExecutionLevel 节点。

        <requestedExecutionLevel  level="asInvoker" uiAccess="false" />
        <requestedExecutionLevel  level="requireAdministrator" uiAccess="false" />
        <requestedExecutionLevel  level="highestAvailable" uiAccess="false" />

            指定 requestedExecutionLevel 元素将禁用文件和注册表虚拟化。
            如果你的应用程序需要此虚拟化来实现向后兼容性，则移除此
            元素。
        -->
				<requestedExecutionLevel  level="requireAdministrator" uiAccess="false" />
			</requestedPrivileges>
		</security>
	</trustInfo>
</assembly>
```