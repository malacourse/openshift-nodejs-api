# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minReadySeconds** | **Number** | MinReadySeconds is the minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) | [optional] 
**paused** | **Boolean** | Paused indicates that the deployment config is paused resulting in no new deployments on template changes or changes in the template caused by other triggers. | [optional] 
**replicas** | **Number** | Replicas is the number of desired replicas. | 
**revisionHistoryLimit** | **Number** | RevisionHistoryLimit is the number of old ReplicationControllers to retain to allow for rollbacks. This field is a pointer to allow for differentiation between an explicit zero and not specified. | [optional] 
**selector** | **{String: String}** | Selector is a label query over pods that should match the Replicas count. | [optional] 
**strategy** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy.md) | Strategy describes how a deployment is executed. | 
**template** | [**IoK8sKubernetesPkgApiV1PodTemplateSpec**](IoK8sKubernetesPkgApiV1PodTemplateSpec.md) | Template is the object that describes the pod that will be created if insufficient replicas are detected. | [optional] 
**test** | **Boolean** | Test ensures that this deployment config will have zero replicas except while a deployment is running. This allows the deployment config to be used as a continuous deployment test - triggering on images, running the deployment, and then succeeding or failing. Post strategy hooks and After actions can be used to integrate successful deployment with an action. | 
**triggers** | [**[ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentTriggerPolicy]**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentTriggerPolicy.md) | Triggers determine how updates to a DeploymentConfig result in new deployments. If no triggers are defined, a new deployment can only occur as a result of an explicit client update to the DeploymentConfig with a new LatestVersion. If null, defaults to having a config change trigger. | 


