# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1Lifecycle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postStart** | [**IoK8sKubernetesPkgApiV1Handler**](IoK8sKubernetesPkgApiV1Handler.md) | PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: http://kubernetes.io/docs/user-guide/container-environment#hook-details | [optional] 
**preStop** | [**IoK8sKubernetesPkgApiV1Handler**](IoK8sKubernetesPkgApiV1Handler.md) | PreStop is called immediately before a container is terminated. The container is terminated after the handler completes. The reason for termination is passed to the handler. Regardless of the outcome of the handler, the container is eventually terminated. Other management of the container blocks until the hook completes. More info: http://kubernetes.io/docs/user-guide/container-environment#hook-details | [optional] 


