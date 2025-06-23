# docker-compose

## 指令
Docker Compose有一些常用的指令，以下是它们的简要说明：

1. **build：**
   - 从Dockerfile构建或重新构建服务。
   - 语法：`docker-compose build [options] [SERVICE...]`

2. **up：**
   - 启动并构建服务容器。
   - 语法：`docker-compose up [options] [SERVICE...]`

3. **down：**
   - 停止并删除服务容器、网络、卷等。
   - 语法：`docker-compose down [options]`

4. **start：**
   - 启动已创建的服务容器。
   - 语法：`docker-compose start [SERVICE...]`

5. **stop：**
   - 停止已启动的服务容器。
   - 语法：`docker-compose stop [SERVICE...]`

6. **restart：**
   - 重启已创建的服务容器。
   - 语法：`docker-compose restart [SERVICE...]`

7. **exec：**
   - 在运行的容器中执行命令。
   - 语法：`docker-compose exec [options] SERVICE COMMAND [ARGS...]`

8. **logs：**
   - 查看服务容器的日志输出。
   - 语法：`docker-compose logs [options] [SERVICE...]`

9. **ps：**
   - 显示服务容器的状态。
   - 语法：`docker-compose ps [options] [SERVICE...]`

10. **config：**
    - 校验并显示docker-compose.yml文件的配置。
    - 语法：`docker-compose config [options]`

这些指令是Docker Compose中常用的指令，可以用于管理和操作多个容器化的服务。

## 配置
docker-compose配置文件（通常是docker-compose.yaml或docker-compose.yml）包含许多属性，以下是一些常见的属性及其说明：

1. **version：**
   - 定义docker-compose文件的版本。例如：`version: '3.8'`

2. **services：**
   - 定义各个服务及其配置。
   - 每个服务可以包含诸如镜像、环境变量、端口映射等配置。
   - 示例：
     ```yaml
     services:
       web:
         image: nginx:latest
         ports:
           - "8080:80"
     ```

3. **volumes：**
   - 定义数据卷的配置，用于持久化数据。
   - 可以指定本地路径或远程路径作为卷的源。
   - 示例：
     ```yaml
     volumes:
       data:
     ```

4. **networks：**
   - 定义网络的配置，用于连接多个容器。
   - 可以指定网络的名称、驱动程序等。
   - 示例：
     ```yaml
     networks:
       mynet:
         driver: bridge
     ```

5. **environment：**
   - 定义环境变量，用于传递给容器内部的应用程序。
   - 示例：
     ```yaml
     environment:
       MYSQL_ROOT_PASSWORD: example
     ```

6. **ports：**
   - 定义端口映射，将容器内部的端口映射到宿主机上的端口。
   - 示例：
     ```yaml
     ports:
       - "8080:80"
     ```

7. **depends_on：**
   - 定义服务之间的依赖关系，确保一个服务在另一个服务启动后再启动。
   - 示例：
     ```yaml
     depends_on:
       - db
     ```

8. **restart：**
   - 定义容器退出时的重启策略。
   - 示例：
     ```yaml
     restart: always
     ```

9. **command：**
   - 定义容器启动时执行的命令。
   - 示例：
     ```yaml
     command: ["bundle", "exec", "thin", "-p", "3000"]
     ```

10. **build：**
    - 定义构建镜像时的参数，可以指定Dockerfile的位置、构建上下文等。
    - 示例：
      ```yaml
      build:
        context: .
        dockerfile: Dockerfile
      ```

这些是docker-compose文件中常见的属性，用于定义和配置容器化的服务。