import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Function } from "aws-cdk-lib/aws-lambda";
import { Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";

export interface ApiGatewayStackProps extends StackProps{
    backendFunction: Function;
}

export class ApiGatewayStack extends Stack{
    constructor(scope: Construct, id: string, props: ApiGatewayStackProps){
        super(scope, id, props);

        const api = new LambdaRestApi(this, 'api',{
            restApiName: "API for CPSC 454",
            handler: props.backendFunction,
            proxy: true,
            defaultCorsPreflightOptions:{
                allowOrigins: ['http://localhost:3000'],
                allowHeaders: ['Content-Type']
            }
        });
    }

}