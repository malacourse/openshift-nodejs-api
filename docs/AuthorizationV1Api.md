# OpenShiftApiWithKubernetes.AuthorizationV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces**](AuthorizationV1Api.md#createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces) | **POST** /apis/authorization.k8s.io/v1/localsubjectaccessreviews | 
[**createAuthorizationV1NamespacedLocalSubjectAccessReview**](AuthorizationV1Api.md#createAuthorizationV1NamespacedLocalSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews | 
[**createAuthorizationV1SelfSubjectAccessReview**](AuthorizationV1Api.md#createAuthorizationV1SelfSubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1/selfsubjectaccessreviews | 
[**createAuthorizationV1SubjectAccessReview**](AuthorizationV1Api.md#createAuthorizationV1SubjectAccessReview) | **POST** /apis/authorization.k8s.io/v1/subjectaccessreviews | 
[**getAuthorizationV1APIResources**](AuthorizationV1Api.md#getAuthorizationV1APIResources) | **GET** /apis/authorization.k8s.io/v1/ | 


<a name="createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces"></a>
# **createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces**
> IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces(body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1LocalSubjectAccessReviewForAllNamespaces(body, opts, (error, data, response) => {
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
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1NamespacedLocalSubjectAccessReview"></a>
# **createAuthorizationV1NamespacedLocalSubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview createAuthorizationV1NamespacedLocalSubjectAccessReview(namespace, body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1NamespacedLocalSubjectAccessReview(namespace, body, opts, (error, data, response) => {
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
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1LocalSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1SelfSubjectAccessReview"></a>
# **createAuthorizationV1SelfSubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview createAuthorizationV1SelfSubjectAccessReview(body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1SelfSubjectAccessReview(body, opts, (error, data, response) => {
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
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1SelfSubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAuthorizationV1SubjectAccessReview"></a>
# **createAuthorizationV1SubjectAccessReview**
> IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview createAuthorizationV1SubjectAccessReview(body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1Api();

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview(); // IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAuthorizationV1SubjectAccessReview(body, opts, (error, data, response) => {
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
 **body** | [**IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview**](IoK8sKubernetesPkgApisAuthorizationV1SubjectAccessReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAuthorizationV1APIResources"></a>
# **getAuthorizationV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getAuthorizationV1APIResources()



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

let apiInstance = new OpenShiftApiWithKubernetes.AuthorizationV1Api();

apiInstance.getAuthorizationV1APIResources((error, data, response) => {
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

