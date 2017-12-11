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
import IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentCondition from './IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentCondition';





/**
* The IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus model module.
* @module model/IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus</code>.
    * DeploymentStatus is the most recently observed status of the Deployment.
    * @alias module:model/IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus} obj Optional instance to populate.
    * @return {module:model/IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus} The populated <code>IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentStatus();

            
            
            

            if (data.hasOwnProperty('availableReplicas')) {
                obj['availableReplicas'] = ApiClient.convertToType(data['availableReplicas'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentCondition]);
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
            if (data.hasOwnProperty('readyReplicas')) {
                obj['readyReplicas'] = ApiClient.convertToType(data['readyReplicas'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('unavailableReplicas')) {
                obj['unavailableReplicas'] = ApiClient.convertToType(data['unavailableReplicas'], 'Number');
            }
            if (data.hasOwnProperty('updatedReplicas')) {
                obj['updatedReplicas'] = ApiClient.convertToType(data['updatedReplicas'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
    * @member {Number} availableReplicas
    */
    availableReplicas = undefined;
    /**
    * Represents the latest available observations of a deployment's current state.
    * @member {Array.<module:model/IoK8sKubernetesPkgApisExtensionsV1beta1DeploymentCondition>} conditions
    */
    conditions = undefined;
    /**
    * The generation observed by the deployment controller.
    * @member {Number} observedGeneration
    */
    observedGeneration = undefined;
    /**
    * Total number of ready pods targeted by this deployment.
    * @member {Number} readyReplicas
    */
    readyReplicas = undefined;
    /**
    * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * Total number of unavailable pods targeted by this deployment.
    * @member {Number} unavailableReplicas
    */
    unavailableReplicas = undefined;
    /**
    * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
    * @member {Number} updatedReplicas
    */
    updatedReplicas = undefined;








}


