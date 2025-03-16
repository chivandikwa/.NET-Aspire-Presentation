Open in vs code with default

run

Add more and hard code result
- jobs different


How to run multiple?

- dont run!

three - repository - but now dealing with ports etc

bring in aspire integration


check - AddServiceDefaults

check app host

app host now starting service

complete repository

give names

.WaitForCompletion(migration);

customize stuff var cache = builder.AddRedis("cache")
                   .WithImageTag("latest");

.WithHttpEndpoint(port: 9043, name: "endpoint");

builder.AddProject<Projects.AspireApp_CatalogDbMigration>("migration")
       .WithReference(catalogDb)
       .WithParentRelationship(catalogDb);

default is auto start, could have been WithExplicitStart

run

open processing, webhooks

open api


click through resources

for jobs go to console

show the traces from the calls that were made

skip rest


ok, lets make things more representative!







Emulators


- Azure Service Bus

- Azure Cosmos BD

- Azure SignalR

- Azure Storage

- Azure Event Hubs

- Azure Cosmos DB

Official partnership with AWS for integration

*Distributed by Default*

- Aspire's AppHost project provides a centralized orchestration model for defining, connecting, and managing distributed components
- Built-in service discovery allows services to find and communicate with each other without complex configuration
- Resource binding patterns standardize how services connect to dependencies


Configuration Explosion

Unified configuration model across all services using the AppHost project
Environment variable management and propagation between components
Configuration sharing across development and production environments
Standardized connection string and secret handling

Observability Challenges

Out-of-the-box instrumentation for metrics, logs, and distributed tracing
Unified dashboard for real-time monitoring of all services
OpenTelemetry integration provides standardized observability with minimal code
Correlation of requests across service boundaries automatically handled

Local Development vs. Production Gap

The Aspire development dashboard creates production-like environments locally
Containerization handled transparently during development
Consistent networking and service discovery between environments
Infrastructure components (databases, caches, etc.) easily replicated locally

Deployment Complexity

Bicep and Terraform integration for infrastructure as code
Container-ready applications with minimal configuration
Azure deployment tooling integration
Environment-specific configuration handling

Technology Sprawl

Standardization of common patterns like health checks, resiliency, and configuration
Component library abstracts away infrastructure complexity
Consistent programming model across different infrastructure technologies
Simplified integration with various Azure services and third-party tools

SRE Complexity

Built-in health checks and readiness probes
Standardized resilience patterns like retries and circuit breakers
Resource management for CPU and memory
Structured logging with consistent formats

Team Cognitive Load

Reduced boilerplate code for common cloud-native patterns
Consistent programming model across different service types
Visual dashboard reduces the need to context-switch between tools
Integration with familiar .NET development experience reduces learning curve
