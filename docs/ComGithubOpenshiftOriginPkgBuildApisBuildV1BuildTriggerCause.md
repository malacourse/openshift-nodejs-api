# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildTriggerCause

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitbucketWebHook** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BitbucketWebHookCause**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BitbucketWebHookCause.md) | BitbucketWebHook represents data for a Bitbucket webhook that fired a specific build. | [optional] 
**genericWebHook** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1GenericWebHookCause**](ComGithubOpenshiftOriginPkgBuildApisBuildV1GenericWebHookCause.md) | genericWebHook holds data about a builds generic webhook trigger. | [optional] 
**githubWebHook** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1GitHubWebHookCause**](ComGithubOpenshiftOriginPkgBuildApisBuildV1GitHubWebHookCause.md) | gitHubWebHook represents data for a GitHub webhook that fired a specific build. | [optional] 
**gitlabWebHook** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1GitLabWebHookCause**](ComGithubOpenshiftOriginPkgBuildApisBuildV1GitLabWebHookCause.md) | GitLabWebHook represents data for a GitLab webhook that fired a specific build. | [optional] 
**imageChangeBuild** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1ImageChangeCause**](ComGithubOpenshiftOriginPkgBuildApisBuildV1ImageChangeCause.md) | imageChangeBuild stores information about an imagechange event that triggered a new build. | [optional] 
**message** | **String** | message is used to store a human readable message for why the build was triggered. E.g.: \&quot;Manually triggered by user\&quot;, \&quot;Configuration change\&quot;,etc. | [optional] 


