# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1ImageStreamTag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**conditions** | [**[ComGithubOpenshiftOriginPkgImageApisImageV1TagEventCondition]**](ComGithubOpenshiftOriginPkgImageApisImageV1TagEventCondition.md) | conditions is an array of conditions that apply to the image stream tag. | [optional] 
**generation** | **Number** | generation is the current generation of the tagged image - if tag is provided and this value is not equal to the tag generation, a user has requested an import that has not completed, or conditions will be filled out indicating any error. | 
**image** | [**ComGithubOpenshiftOriginPkgImageApisImageV1Image**](ComGithubOpenshiftOriginPkgImageApisImageV1Image.md) | image associated with the ImageStream and tag. | 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**lookupPolicy** | [**ComGithubOpenshiftOriginPkgImageApisImageV1ImageLookupPolicy**](ComGithubOpenshiftOriginPkgImageApisImageV1ImageLookupPolicy.md) | lookupPolicy indicates whether this tag will handle image references in this namespace. | 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**tag** | [**ComGithubOpenshiftOriginPkgImageApisImageV1TagReference**](ComGithubOpenshiftOriginPkgImageApisImageV1TagReference.md) | tag is the spec tag associated with this image stream tag, and it may be null if only pushes have occurred to this image stream. | 


