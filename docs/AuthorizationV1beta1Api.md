# OpenShiftApiWithKubernetes.AuthorizationV1beta1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces**](AuthorizationV1beta1Api.md#createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces) | **POST** /apis/authorization.k8s.io/v1beta1/localsubjectaccessreviews | 
[**createAuthorizationV1beta1NamespacedLocalSubjectAccessReview**](AuthorizationV1beta1Api.md#createAuthorizationV1beta1NamespacedLocalSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews | 
[**createAuthorizationV1beta1SelfSubjectAccessReview**](AuthorizationV1beta1Api.md#createAuthorizationV1beta1SelfSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews | 
[**createAuthorizationV1beta1SubjectAccessReview**](AuthorizationV1beta1Api.md#createAuthorizationV1beta1SubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1beta1/subjectaccessreviews | 
[**getAuthorizationV1beta1APIResources**](AuthorizationV1beta1Api.md#getAuthorizationV1beta1APIResources) | **GET** /apis/authorization.k8s.io/v1beta1/ | 


<a name="createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces"></a>
# **createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces**
> IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces(body, opts)



create a LocalSubjectAccessReview

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1beta1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1beta1LocalSubjectAccessReviewForAllNamespaces(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1beta1NamespacedLocalSubjectAccessReview"></a>
# **createAuthorizationV1beta1NamespacedLocalSubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(namespace, body, opts)



create a LocalSubjectAccessReview

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1beta1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1beta1NamespacedLocalSubjectAccessReview(namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1LocalSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1beta1SelfSubjectAccessReview"></a>
# **createAuthorizationV1beta1SelfSubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview createAuthorizationV1beta1SelfSubjectAccessReview(body, opts)



create a SelfSubjectAccessReview

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1beta1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1beta1SelfSubjectAccessReview(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1SelfSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1beta1SubjectAccessReview"></a>
# **createAuthorizationV1beta1SubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview createAuthorizationV1beta1SubjectAccessReview(body, opts)



create a SubjectAccessReview

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1beta1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1beta1SubjectAccessReview(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1beta1SubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAuthorizationV1beta1APIResources"></a>
# **getAuthorizationV1beta1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getAuthorizationV1beta1APIResources()



get available resources

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1beta1Api();

apiInstance.getAuthorizationV1beta1APIResources((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IoK8sApimachineryPkgApisMetaV1APIResourceList**](IoK8sApimachineryPkgApisMetaV1APIResourceList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

