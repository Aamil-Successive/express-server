# ***The Twelve-Factor App***

The Twelve-Factor App methodology is a methodology for building software as a service application. These best practices are designed to enable applications to be built with portability and resilience when deployed to the web. The methodology was drafted by developers at Heroku, a platform-as-a-service company, and was first presented by Adam Wiggins circa 2011.

## 1. **Codebase** *(One Codebase Tracked In Revision Control, Many Deploys)*

    12-factor app advocates that every application should have its own codebase (repos). Multiple codebases for multiple versions must be avoided. Please do note that having branches would be fine. I.e. For all the deployment environments there should be only one repo but not multiple.

    Multiple apps sharing the same code are a violation of the twelve-factor. Here you should opt-in for shared libraries.

    From the 12-factor app perspective app, deploy meaning the running instance of an app like production, staging, QA, etc. Additionally, every developer has a copy of the app running in their local development environment, each of which also qualifies as a deploy.

    Different versions (the version is like a code change that is available in one environment but not in other) may be active in multiple deploys.


## 2. **Dependencies** *(Explicitly Declare and Isolate the Dependencies)*

    It talks about managing the dependencies externally using dependency management tools instead of adding them to your codebase.

    From the perspective of the java, you can think of Gradle as a dependency manager. You will mention all the dependencies in build.gradle file and your application will download all the mentioned dependencies from maven repository or various other repositories.

    You also need to consider the dependencies from the operating system/ execution environment perspective as well.

## 3. **Config** *(Store Configurations In an Environment)*

    Anything that varies between the deployment environments is considered as configuration. This includes:

    - Database connections and credentials, system integration endpoints
    - Credentials to external services such as Amazon S3 or Twitter or any other external apps
    - Application-specific information like IP Addresses, ports, and hostnames, etc.
    
    You should not hardcode any configuration values as constants in the codebase. This is a direct violation of 12-factor app principles.

    12-factor app principles suggest saving the configuration values in the environment variables.

    It advocates the strict separation between the code and configurations. The code must be the same irrespective of where the application being deployed.


## 4. **Backing Services** *(Treat Backing Resources as Attached Resources)*
    As per 12 factor app principles, a backing service is an application/service the app consumes over the network as part of its normal operation.

    Database, Message Brokers, any other external systems that the app communicates is treated as Backing service.

    12-factor app can automatically swap the application from one provider to another without making any further modifications to the code base. Let us say, you would like to change the database server from MySQL to Aurora. To do so, you should not make any code changes to your application. Only configuration change should be able to take care of it.


## 5. **Build, Release, and Run** *(Strictly Separate Build and Run Stages)*

    The application must have a strict separation between the build, release, and run stages. Let us understand each stage in more detail.

    - Build stage: transform the code into an executable bundle/ build package.
    - Release stage: get the build package from the build stage and combines with the configurations of the deployment environment and make your application ready to run.
    - Run stage: It is like running your app in the execution environment.

## 6. **Processes** *(Execute the App as One or More Stateless Processes)*

    The app is executed inside the execution environment as a process. An app can have one or more instances/processes to meet the user/customer demands.

    As per 12-factor principles, the application should not store the data in in-memory and it must be saved to a store and use from there. As far as the state concern, your application should store the state in the database instead of in memory of the process.

    Avoid using sticky sessions, using sticky sessions are a violation of 12-factor app principles. If you would store the session information, you can choose redis or memcached or any other cache provider based on your requirements.

    By following these, your app can be highly scalable without any impact on the system

## 7. **Port Binding** *(Export Services Via Port Binding)*

    The twelve-factor app is completely self-contained and doesn't rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

    In short, this is all about having your application as a standalone instead of deploying them into any of the external web servers.

## 8. **Concurrency** *(Scale Out Via the Process Model)*

    This talks about scaling the application. Twelve-factor app principles suggest to consider running your application as multiple processes/instances instead of running in one large system. You can still opt-in for threads to improve the concurrent handling of the requests.

## 9. **Disposability** *(Maximize the Robustness with Fast Startup and Graceful Shutdown)*
    The twelve-factor app's processes are disposable, meaning they can be started or stopped at a moment's notice. When the application is shutting down or starting, an instance should not impact the application state.

    Graceful shutdowns are very important. The system must ensure the correct state.

    The system should not get impacted when new instances are added or takedown the existing instances as per need. This is also known as system disposability.

    Systems do crash due to various reasons. the system should ensure that the impact would be minimal and the application should be stored in a valid state.

## 10. **Dev/Prod Parity** *(Keep Development, Staging, and Production as Similar as Possible)*

    The twelve-factor methodology suggests keeping the gap between development and production environment as minimal as possible. This reduces the risks of showing up bugs in a specific environment.

    The twelve-factor developer resists the urge to use different backing services between development and production.

## 11. **Logs** *(Treat Logs as Event Streams)*
    
    Logs become paramount in troubleshooting the production issues or understanding the user behavior. Logs provide visibility into the behavior of a running application.

    Twelve-factor app principles advocate separating the log generation and processing the log's information. From the application logs will be written as a standard output and the execution environment takes care of capture, storage, curation, and archival of such stream should be handled by the execution environment.

## 12. **Admin Processes** *(Run Admin/Management Tasks as One-Off Processes)*

    There is a number of one-off processes as part of the application deployment like data migration, executing one-off scripts in a specific environment.

    Twelve-factor principles advocates for keeping such administrative tasks as part of the application codebase in the repository. By doing so, one-off scripts follow the same process defined for your codebase.

    Ensure one-off scripts are automated so that you don't need to worry about executing them manually before releasing the build.

    Twelve-factor principles also suggest using the built-in tool of the execution environment to run those scripts on production servers.
