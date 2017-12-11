# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeDeadlineSeconds** | **Number** | ActiveDeadlineSeconds is the duration in seconds that the deployer pods for this deployment config may be active on a node before the system actively tries to terminate them. | [optional] 
**annotations** | **{String: String}** | Annotations is a set of key, value pairs added to custom deployer and lifecycle pre/post hook pods. | [optional] 
**customParams** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams**](ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams.md) | CustomParams are the input to the Custom deployment strategy, and may also be specified for the Recreate and Rolling strategies to customize the execution process that runs the deployment. | [optional] 
**labels** | **{String: String}** | Labels is a set of key, value pairs added to custom deployer and lifecycle pre/post hook pods. | [optional] 
**recreateParams** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams**](ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams.md) | RecreateParams are the input to the Recreate deployment strategy. | [optional] 
**resources** | [**IoK8sKubernetesPkgApiV1ResourceRequirements**](IoK8sKubernetesPkgApiV1ResourceRequirements.md) | Resources contains resource requirements to execute the deployment and any hooks. | [optional] 
**rollingParams** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams**](ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams.md) | RollingParams are the input to the Rolling deployment strategy. | [optional] 
**type** | **String** | Type is the name of a deployment strategy. | [optional] 


