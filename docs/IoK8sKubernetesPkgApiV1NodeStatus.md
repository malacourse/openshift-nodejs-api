# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1NodeStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[IoK8sKubernetesPkgApiV1NodeAddress]**](IoK8sKubernetesPkgApiV1NodeAddress.md) | List of addresses reachable to the node. Queried from cloud provider, if available. More info: http://releases.k8s.io/HEAD/docs/admin/node.md#node-addresses | [optional] 
**allocatable** | [**{String: IoK8sApimachineryPkgApiResourceQuantity}**](IoK8sApimachineryPkgApiResourceQuantity.md) | Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. | [optional] 
**capacity** | [**{String: IoK8sApimachineryPkgApiResourceQuantity}**](IoK8sApimachineryPkgApiResourceQuantity.md) | Capacity represents the total resources of a node. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity for more details. | [optional] 
**conditions** | [**[IoK8sKubernetesPkgApiV1NodeCondition]**](IoK8sKubernetesPkgApiV1NodeCondition.md) | Conditions is an array of current observed node conditions. More info: http://releases.k8s.io/HEAD/docs/admin/node.md#node-condition | [optional] 
**daemonEndpoints** | [**IoK8sKubernetesPkgApiV1NodeDaemonEndpoints**](IoK8sKubernetesPkgApiV1NodeDaemonEndpoints.md) | Endpoints of daemons running on the Node. | [optional] 
**images** | [**[IoK8sKubernetesPkgApiV1ContainerImage]**](IoK8sKubernetesPkgApiV1ContainerImage.md) | List of container images on this node | [optional] 
**nodeInfo** | [**IoK8sKubernetesPkgApiV1NodeSystemInfo**](IoK8sKubernetesPkgApiV1NodeSystemInfo.md) | Set of ids/uuids to uniquely identify the node. More info: http://releases.k8s.io/HEAD/docs/admin/node.md#node-info | [optional] 
**phase** | **String** | NodePhase is the recently observed lifecycle phase of the node. More info: http://releases.k8s.io/HEAD/docs/admin/node.md#node-phase The field is never populated, and now is deprecated. | [optional] 
**volumesAttached** | [**[IoK8sKubernetesPkgApiV1AttachedVolume]**](IoK8sKubernetesPkgApiV1AttachedVolume.md) | List of volumes that are attached to the node. | [optional] 
**volumesInUse** | **[String]** | List of attachable volumes in use (mounted) by the node. | [optional] 


