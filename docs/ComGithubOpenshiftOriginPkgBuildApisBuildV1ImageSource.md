# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1ImageSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | from is a reference to an ImageStreamTag, ImageStreamImage, or DockerImage to copy source from. | 
**paths** | [**[ComGithubOpenshiftOriginPkgBuildApisBuildV1ImageSourcePath]**](ComGithubOpenshiftOriginPkgBuildApisBuildV1ImageSourcePath.md) | paths is a list of source and destination paths to copy from the image. | 
**pullSecret** | [**IoK8sKubernetesPkgApiV1LocalObjectReference**](IoK8sKubernetesPkgApiV1LocalObjectReference.md) | pullSecret is a reference to a secret to be used to pull the image from a registry If the image is pulled from the OpenShift registry, this field does not need to be set. | [optional] 


