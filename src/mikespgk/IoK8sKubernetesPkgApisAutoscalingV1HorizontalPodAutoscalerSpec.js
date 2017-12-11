/**
 * OpenShift API (with Kubernetes)
 * OpenShift provides builds, application lifecycle, image content management, and administrative policy on top of Kubernetes. The API allows consistent management of those objects.  All API operations are authenticated via an Authorization bearer token that is provided for service accounts as a generated secret (in JWT form) or via the native OAuth endpoint located at /oauth/authorize. Core infrastructure components may use client certificates that require no authentication.  All API operations return a 'resourceVersion' string that represents the version of the object in the underlying storage. The standard LIST operation performs a snapshot read of the underlying objects, returning a resourceVersion representing a consistent version of the listed objects. The WATCH operation allows all updates to a set of objects after the provided resourceVersion to be observed by a client. By listing and beginning a watch from the returned resourceVersion, clients may observe a consistent view of the state of one or more objects. Note that WATCH always returns the update after the provided resourceVersion. Watch may be extended a limited time in the past - using etcd 2 the watch window is 1000 events (which on a large cluster may only be a few tens of seconds) so clients must explicitly handle the \"watch to old error\" by re-listing.  Objects are divided into two rough categories - those that have a lifecycle and must reflect the state of the cluster, and those that have no state. Objects with lifecycle typically have three main sections:  * 'metadata' common to all objects * a 'spec' that represents the desired state * a 'status' that represents how much of the desired state is reflected on   the cluster at the current time  Objects that have no state have 'metadata' but may lack a 'spec' or 'status' section.  Objects are divided into those that are namespace scoped (only exist inside of a namespace) and those that are cluster scoped (exist outside of a namespace). A namespace scoped resource will be deleted when the namespace is deleted and cannot be created if the namespace has not yet been created or is in the process of deletion. Cluster scoped resources are typically only accessible to admins - resources like nodes, persistent volumes, and cluster policy.  All objects have a schema that is a combination of the 'kind' and 'apiVersion' fields. This schema is additive only for any given version - no backwards incompatible changes are allowed without incrementing the apiVersion. The server will return and accept a number of standard responses that share a common schema - for instance, the common error type is 'metav1.Status' (described below) and will be returned on any error from the API server.  The API is available in multiple serialization formats - the default is JSON (Accept: application/json and Content-Type: application/json) but clients may also use YAML (application/yaml) or the native Protobuf schema (application/vnd.kubernetes.protobuf). Note that the format of the WATCH API call is slightly different - for JSON it returns newline delimited objects while for Protobuf it returns length-delimited frames (4 bytes in network-order) that contain a 'versioned.Watch' Protobuf object.  See the OpenShift documentation at https://docs.openshift.org for more information. 
 *
 * OpenAPI spec version: v3.6.173.0.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import IoK8sKubernetesPkgApisAutoscalingV1CrossVersionObjectReference from './IoK8sKubernetesPkgApisAutoscalingV1CrossVersionObjectReference';





/**
* The IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec model module.
* @module mikespgk/IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec</code>.
    * specification of a horizontal pod autoscaler.
    * @alias module:mikespgk/IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec
    * @class
    * @param maxReplicas {Number} upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
    * @param scaleTargetRef {module:mikespgk/IoK8sKubernetesPkgApisAutoscalingV1CrossVersionObjectReference} reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
    */

    constructor(maxReplicas, scaleTargetRef) {
        

        
        

        this['maxReplicas'] = maxReplicas;this['scaleTargetRef'] = scaleTargetRef;

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec} The populated <code>IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApisAutoscalingV1HorizontalPodAutoscalerSpec();

            
            
            

            if (data.hasOwnProperty('maxReplicas')) {
                obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
            }
            if (data.hasOwnProperty('minReplicas')) {
                obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
            }
            if (data.hasOwnProperty('scaleTargetRef')) {
                obj['scaleTargetRef'] = IoK8sKubernetesPkgApisAutoscalingV1CrossVersionObjectReference.constructFromObject(data['scaleTargetRef']);
            }
            if (data.hasOwnProperty('targetCPUUtilizationPercentage')) {
                obj['targetCPUUtilizationPercentage'] = ApiClient.convertToType(data['targetCPUUtilizationPercentage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
    * @member {Number} maxReplicas
    */
    maxReplicas = undefined;
    /**
    * lower limit for the number of pods that can be set by the autoscaler, default 1.
    * @member {Number} minReplicas
    */
    minReplicas = undefined;
    /**
    * reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisAutoscalingV1CrossVersionObjectReference} scaleTargetRef
    */
    scaleTargetRef = undefined;
    /**
    * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
    * @member {Number} targetCPUUtilizationPercentage
    */
    targetCPUUtilizationPercentage = undefined;








}


