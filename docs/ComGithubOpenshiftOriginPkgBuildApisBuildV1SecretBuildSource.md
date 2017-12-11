# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1SecretBuildSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationDir** | **String** | destinationDir is the directory where the files from the secret should be available for the build time. For the Source build strategy, these will be injected into a container where the assemble script runs. Later, when the script finishes, all files injected will be truncated to zero length. For the Docker build strategy, these will be copied into the build directory, where the Dockerfile is located, so users can ADD or COPY them during docker build. | [optional] 
**secret** | [**IoK8sKubernetesPkgApiV1LocalObjectReference**](IoK8sKubernetesPkgApiV1LocalObjectReference.md) | secret is a reference to an existing secret that you want to use in your build. | 


