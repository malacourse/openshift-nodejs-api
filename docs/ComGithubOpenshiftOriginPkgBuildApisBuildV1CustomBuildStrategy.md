# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1CustomBuildStrategy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buildAPIVersion** | **String** | buildAPIVersion is the requested API version for the Build object serialized and passed to the custom builder | [optional] 
**env** | [**[IoK8sKubernetesPkgApiV1EnvVar]**](IoK8sKubernetesPkgApiV1EnvVar.md) | env contains additional environment variables you want to pass into a builder container. | [optional] 
**exposeDockerSocket** | **Boolean** | exposeDockerSocket will allow running Docker commands (and build Docker images) from inside the Docker container. | [optional] 
**forcePull** | **Boolean** | forcePull describes if the controller should configure the build pod to always pull the images for the builder or only pull if it is not present locally | [optional] 
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | from is reference to an DockerImage, ImageStreamTag, or ImageStreamImage from which the docker image should be pulled | 
**pullSecret** | [**IoK8sKubernetesPkgApiV1LocalObjectReference**](IoK8sKubernetesPkgApiV1LocalObjectReference.md) | pullSecret is the name of a Secret that would be used for setting up the authentication for pulling the Docker images from the private Docker registries | [optional] 
**secrets** | [**[ComGithubOpenshiftOriginPkgBuildApisBuildV1SecretSpec]**](ComGithubOpenshiftOriginPkgBuildApisBuildV1SecretSpec.md) | secrets is a list of additional secrets that will be included in the build pod | [optional] 


