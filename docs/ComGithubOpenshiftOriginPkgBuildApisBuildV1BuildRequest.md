# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**binary** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1BinaryBuildSource**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BinaryBuildSource.md) | binary indicates a request to build from a binary provided to the builder | [optional] 
**dockerStrategyOptions** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1DockerStrategyOptions**](ComGithubOpenshiftOriginPkgBuildApisBuildV1DockerStrategyOptions.md) | DockerStrategyOptions contains additional docker-strategy specific options for the build | [optional] 
**env** | [**[IoK8sKubernetesPkgApiV1EnvVar]**](IoK8sKubernetesPkgApiV1EnvVar.md) | env contains additional environment variables you want to pass into a builder container. | [optional] 
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | from is the reference to the ImageStreamTag that triggered the build. | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**lastVersion** | **Number** | lastVersion (optional) is the LastVersion of the BuildConfig that was used to generate the build. If the BuildConfig in the generator doesn&#39;t match, a build will not be generated. | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | metadata for BuildRequest. | [optional] 
**revision** | [**ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceRevision**](ComGithubOpenshiftOriginPkgBuildApisBuildV1SourceRevision.md) | revision is the information from the source for a specific repo snapshot. | [optional] 
**triggeredBy** | [**[ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildTriggerCause]**](ComGithubOpenshiftOriginPkgBuildApisBuildV1BuildTriggerCause.md) | triggeredBy describes which triggers started the most recent update to the build configuration and contains information about those triggers. | 
**triggeredByImage** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | triggeredByImage is the Image that triggered this build. | [optional] 


