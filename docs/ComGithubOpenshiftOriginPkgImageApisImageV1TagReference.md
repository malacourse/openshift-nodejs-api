# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1TagReference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **{String: String}** | Annotations associated with images using this tag | 
**from** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | From is a reference to an image stream tag or image stream this tag should track | [optional] 
**generation** | **Number** | Generation is the image stream generation that updated this tag - setting it to 0 is an indication that the generation must be updated. Legacy clients will send this as nil, which means the client doesn&#39;t know or care. | 
**importPolicy** | [**ComGithubOpenshiftOriginPkgImageApisImageV1TagImportPolicy**](ComGithubOpenshiftOriginPkgImageApisImageV1TagImportPolicy.md) | Import is information that controls how images may be imported by the server. | [optional] 
**name** | **String** | Name of the tag | 
**reference** | **Boolean** | Reference states if the tag will be imported. Default value is false, which means the tag will be imported. | [optional] 
**referencePolicy** | [**ComGithubOpenshiftOriginPkgImageApisImageV1TagReferencePolicy**](ComGithubOpenshiftOriginPkgImageApisImageV1TagReferencePolicy.md) | ReferencePolicy defines how other components should consume the image | [optional] 


