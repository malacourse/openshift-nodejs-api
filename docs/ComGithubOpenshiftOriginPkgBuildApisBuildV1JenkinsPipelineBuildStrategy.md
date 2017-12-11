# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1JenkinsPipelineBuildStrategy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env** | [**[IoK8sKubernetesPkgApiV1EnvVar]**](IoK8sKubernetesPkgApiV1EnvVar.md) | env contains additional environment variables you want to pass into a build pipeline. | [optional] 
**jenkinsfile** | **String** | Jenkinsfile defines the optional raw contents of a Jenkinsfile which defines a Jenkins pipeline build. | [optional] 
**jenkinsfilePath** | **String** | JenkinsfilePath is the optional path of the Jenkinsfile that will be used to configure the pipeline relative to the root of the context (contextDir). If both JenkinsfilePath &amp; Jenkinsfile are both not specified, this defaults to Jenkinsfile in the root of the specified contextDir. | [optional] 


