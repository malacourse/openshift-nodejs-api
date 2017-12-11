# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1RepositoryImportSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | From is the source for the image repository to import; only kind DockerImage and a name of a Docker image repository is allowed | 
**importPolicy** | [**ComGithubOpenshiftOriginPkgImageApisImageV1TagImportPolicy**](ComGithubOpenshiftOriginPkgImageApisImageV1TagImportPolicy.md) | ImportPolicy is the policy controlling how the image is imported | [optional] 
**includeManifest** | **Boolean** | IncludeManifest determines if the manifest for each image is returned in the response | [optional] 
**referencePolicy** | [**ComGithubOpenshiftOriginPkgImageApisImageV1TagReferencePolicy**](ComGithubOpenshiftOriginPkgImageApisImageV1TagReferencePolicy.md) | ReferencePolicy defines how other components should consume the image | [optional] 


