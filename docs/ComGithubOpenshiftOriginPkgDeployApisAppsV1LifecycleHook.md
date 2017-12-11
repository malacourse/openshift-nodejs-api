# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1LifecycleHook

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execNewPod** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook**](ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook.md) | ExecNewPod specifies the options for a lifecycle hook backed by a pod. | [optional] 
**failurePolicy** | **String** | FailurePolicy specifies what action to take if the hook fails. | 
**tagImages** | [**[ComGithubOpenshiftOriginPkgDeployApisAppsV1TagImageHook]**](ComGithubOpenshiftOriginPkgDeployApisAppsV1TagImageHook.md) | TagImages instructs the deployer to tag the current image referenced under a container onto an image stream tag. | [optional] 


