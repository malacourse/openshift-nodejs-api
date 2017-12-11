# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildStrategy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customStrategy** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1CustomBuildStrategy**](ComGithubOpenshiftOriginPkgBuildApisBuildV1CustomBuildStrategy.md) | customStrategy holds the parameters to the Custom build strategy | [optional] 
**dockerStrategy** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1DockerBuildStrategy**](ComGithubOpenshiftOriginPkgBuildApisBuildV1DockerBuildStrategy.md) | dockerStrategy holds the parameters to the Docker build strategy. | [optional] 
**jenkinsPipelineStrategy** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1JenkinsPipelineBuildStrategy**](ComGithubOpenshiftOriginPkgBuildApisBuildV1JenkinsPipelineBuildStrategy.md) | JenkinsPipelineStrategy holds the parameters to the Jenkins Pipeline build strategy. This strategy is in tech preview. | [optional] 
**sourceStrategy** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceBuildStrategy**](ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceBuildStrategy.md) | sourceStrategy holds the parameters to the Source build strategy. | [optional] 
**type** | **String** | type is the kind of build strategy. | 


