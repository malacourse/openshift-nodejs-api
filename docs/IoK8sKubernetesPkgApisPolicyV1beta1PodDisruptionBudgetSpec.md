# OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisPolicyV1beta1PodDisruptionBudgetSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minAvailable** | [**IoK8sApimachineryPkgUtilIntstrIntOrString**](IoK8sApimachineryPkgUtilIntstrIntOrString.md) | An eviction is allowed if at least \&quot;minAvailable\&quot; pods selected by \&quot;selector\&quot; will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying \&quot;100%\&quot;. | [optional] 
**selector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) | Label query over pods whose evictions are managed by the disruption budget. | [optional] 


