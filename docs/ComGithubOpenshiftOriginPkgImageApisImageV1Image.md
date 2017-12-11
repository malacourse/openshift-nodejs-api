# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1Image

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**dockerImageConfig** | **String** | DockerImageConfig is a JSON blob that the runtime uses to set up the container. This is a part of manifest schema v2. | [optional] 
**dockerImageLayers** | [**[ComGithubOpenshiftOriginPkgImageApisImageV1ImageLayer]**](ComGithubOpenshiftOriginPkgImageApisImageV1ImageLayer.md) | DockerImageLayers represents the layers in the image. May not be set if the image does not define that data. | 
**dockerImageManifest** | **String** | DockerImageManifest is the raw JSON of the manifest | [optional] 
**dockerImageManifestMediaType** | **String** | DockerImageManifestMediaType specifies the mediaType of manifest. This is a part of manifest schema v2. | [optional] 
**dockerImageMetadata** | [**IoK8sApimachineryPkgRuntimeRawExtension**](IoK8sApimachineryPkgRuntimeRawExtension.md) | DockerImageMetadata contains metadata about this image | [optional] 
**dockerImageMetadataVersion** | **String** | DockerImageMetadataVersion conveys the version of the object, which if empty defaults to \&quot;1.0\&quot; | [optional] 
**dockerImageReference** | **String** | DockerImageReference is the string that can be used to pull this image. | [optional] 
**dockerImageSignatures** | **[Blob]** | DockerImageSignatures provides the signatures as opaque blobs. This is a part of manifest schema v1. | [optional] 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**signatures** | [**[ComGithubOpenshiftOriginPkgImageApisImageV1ImageSignature]**](ComGithubOpenshiftOriginPkgImageApisImageV1ImageSignature.md) | Signatures holds all signatures of the image. | [optional] 


