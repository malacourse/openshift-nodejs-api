# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **Number** | AvailableReplicas is the total number of available pods targeted by this deployment config. | 
**conditions** | [**[ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentCondition]**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentCondition.md) | Conditions represents the latest available observations of a deployment config&#39;s current state. | [optional] 
**details** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentDetails**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentDetails.md) | Details are the reasons for the update to this deployment config. This could be based on a change made by the user or caused by an automatic trigger | [optional] 
**latestVersion** | **Number** | LatestVersion is used to determine whether the current deployment associated with a deployment config is out of sync. | 
**observedGeneration** | **Number** | ObservedGeneration is the most recent generation observed by the deployment config controller. | 
**readyReplicas** | **Number** | Total number of ready pods targeted by this deployment. | [optional] 
**replicas** | **Number** | Replicas is the total number of pods targeted by this deployment config. | 
**unavailableReplicas** | **Number** | UnavailableReplicas is the total number of unavailable pods targeted by this deployment config. | 
**updatedReplicas** | **Number** | UpdatedReplicas is the total number of non-terminated pods targeted by this deployment config that have the desired template spec. | 


