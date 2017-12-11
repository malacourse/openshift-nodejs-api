# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgImageApisImageV1ImageLookupPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local** | **Boolean** | local will change the docker short image references (like \&quot;mysql\&quot; or \&quot;php:latest\&quot;) on objects in this namespace to the image ID whenever they match this image stream, instead of reaching out to a remote registry. The name will be fully qualified to an image ID if found. The tag&#39;s referencePolicy is taken into account on the replaced value. Only works within the current namespace. | 


