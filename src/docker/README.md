# docker 起步


## 应用
将docker应用到现有的`.net core`项目中
```sh
# 执行docker命令, 初始化项目
docker init

# 启动docker项目
docker compose up --build
```

## dockerfile & compose的区别
Dockerfile和Docker Compose都是用于容器化应用程序的工具，但它们的作用有所不同：

1. **Dockerfile：**
   - Dockerfile用于定义单个Docker镜像的构建过程。
   - 通过Dockerfile，可以指定容器的基础镜像、依赖安装、文件复制、环境变量设置等操作，以及容器启动时执行的命令。
   - Dockerfile使得开发者可以自动化地构建可重复部署的容器镜像，并将应用程序与其依赖项打包在一起。

2. **Docker Compose：**
   - Docker Compose用于定义和管理多个容器化的服务。
   - 通过docker-compose.yaml文件，可以定义多个容器及其之间的关系、网络配置、数据卷挂载等。
   - Docker Compose简化了多个容器之间的协作和部署过程，使得开发者可以轻松地在本地开发和测试复杂的多容器应用程序。

总的来说，Dockerfile用于构建单个容器镜像，而Docker Compose用于定义和管理多个容器化的服务，两者结合使用可以实现容器化应用程序的开发、测试和部署。