# AWS Serverless Tools

In alpha mode. Maybe pre-alpha. Docs coming soon.

## CLI 

### Installation

`npm install -g nest-aws-serverless-tools`

### Basic Use

#### Initialize serverless Nest Express API

In the same folder as package.json, run the following command:

`aws-serverless-tools init --type=nest-express-api`

This script does the following:

1. Obtains required details about your API and CloudFormation app.
2. Scaffolds a `cfn` directory with the CloudFormation template, a bare-bones OpenApi file, a parameters file, a tags file, and a deployment script for local use (CI/CD support & documentation coming). Also generates a `src/lambda-entry-point.ts` file for the Lambda bootstrapping.
3. Installs required packages to support AWS and OpenApi tooling.
4. Configures the `deploy` and `openapi` NPM scripts.
5. Adds configuration for the `CloudFormationLambdaParametersConfig` tool and the OpenAPI generation tool.

## Stay in touch

- Author - [Kerry Ritter](http://kerryritter.com)
- Twitter - [@kerryritter](https://twitter.com/kerryritter)

## License

  Nest is [MIT licensed](LICENSE).
