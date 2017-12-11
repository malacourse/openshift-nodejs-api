# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildConfigSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completionDeadlineSeconds** | **Number** | completionDeadlineSeconds is an optional duration in seconds, counted from the time when a build pod gets scheduled in the system, that the build may be active on a node before the system actively tries to terminate the build; value must be positive integer | [optional] 
**failedBuildsHistoryLimit** | **Number** | failedBuildsHistoryLimit is the number of old failed builds to retain. If not specified, all failed builds are retained. | [optional] 
**nodeSelector** | **{String: String}** | nodeSelector is a selector which must be true for the build pod to fit on a node If nil, it can be overridden by default build nodeselector values for the cluster. If set to an empty map or a map with any values, default build nodeselector values are ignored. | 
**output** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildOutput**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildOutput.md) | output describes the Docker image the Strategy should produce. | [optional] 
**postCommit** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildPostCommitSpec**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildPostCommitSpec.md) | postCommit is a build hook executed after the build output image is committed, before it is pushed to a registry. | [optional] 
**resources** | [**IoK8sKubernetesPkgApiV1ResourceRequirements**](IoK8sKubernetesPkgApiV1ResourceRequirements.md) | resources computes resource requirements to execute the build. | [optional] 
**revision** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceRevision**](ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceRevision.md) | revision is the information from the source for a specific repo snapshot. This is optional. | [optional] 
**runPolicy** | **String** | RunPolicy describes how the new build created from this build configuration will be scheduled for execution. This is optional, if not specified we default to \&quot;Serial\&quot;. | [optional] 
**serviceAccount** | **String** | serviceAccount is the name of the ServiceAccount to use to run the pod created by this build. The pod will be allowed to use secrets referenced by the ServiceAccount | [optional] 
**source** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildSource**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildSource.md) | source describes the SCM in use. | [optional] 
**strategy** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildStrategy**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildStrategy.md) | strategy defines how to perform a build. | 
**successfulBuildsHistoryLimit** | **Number** | successfulBuildsHistoryLimit is the number of old successful builds to retain. If not specified, all successful builds are retained. | [optional] 
**triggers** | [**[ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildTriggerPolicy]**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildTriggerPolicy.md) | triggers determine how new Builds can be launched from a BuildConfig. If no triggers are defined, a new build can only occur as a result of an explicit client build creation. | 


