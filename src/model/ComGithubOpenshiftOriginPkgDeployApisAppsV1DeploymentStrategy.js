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
import ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams from './ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams';
import ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams from './ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams';
import ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams from './ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams';
import IoK8sKubernetesPkgApiV1ResourceRequirements from './IoK8sKubernetesPkgApiV1ResourceRequirements';





/**
* The ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy model module.
* @module model/ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy
* @version v3.6.173.0.21
*/
export default class ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy {
    /**
    * Constructs a new <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy</code>.
    * DeploymentStrategy describes how to perform a deployment.
    * @alias module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy} obj Optional instance to populate.
    * @return {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy} The populated <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentStrategy();

            
            
            

            if (data.hasOwnProperty('activeDeadlineSeconds')) {
                obj['activeDeadlineSeconds'] = ApiClient.convertToType(data['activeDeadlineSeconds'], 'Number');
            }
            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
            if (data.hasOwnProperty('customParams')) {
                obj['customParams'] = ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams.constructFromObject(data['customParams']);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('recreateParams')) {
                obj['recreateParams'] = ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams.constructFromObject(data['recreateParams']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = IoK8sKubernetesPkgApiV1ResourceRequirements.constructFromObject(data['resources']);
            }
            if (data.hasOwnProperty('rollingParams')) {
                obj['rollingParams'] = ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams.constructFromObject(data['rollingParams']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * ActiveDeadlineSeconds is the duration in seconds that the deployer pods for this deployment config may be active on a node before the system actively tries to terminate them.
    * @member {Number} activeDeadlineSeconds
    */
    activeDeadlineSeconds = undefined;
    /**
    * Annotations is a set of key, value pairs added to custom deployer and lifecycle pre/post hook pods.
    * @member {Object.<String, String>} annotations
    */
    annotations = undefined;
    /**
    * CustomParams are the input to the Custom deployment strategy, and may also be specified for the Recreate and Rolling strategies to customize the execution process that runs the deployment.
    * @member {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1CustomDeploymentStrategyParams} customParams
    */
    customParams = undefined;
    /**
    * Labels is a set of key, value pairs added to custom deployer and lifecycle pre/post hook pods.
    * @member {Object.<String, String>} labels
    */
    labels = undefined;
    /**
    * RecreateParams are the input to the Recreate deployment strategy.
    * @member {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1RecreateDeploymentStrategyParams} recreateParams
    */
    recreateParams = undefined;
    /**
    * Resources contains resource requirements to execute the deployment and any hooks.
    * @member {module:model/IoK8sKubernetesPkgApiV1ResourceRequirements} resources
    */
    resources = undefined;
    /**
    * RollingParams are the input to the Rolling deployment strategy.
    * @member {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1RollingDeploymentStrategyParams} rollingParams
    */
    rollingParams = undefined;
    /**
    * Type is the name of a deployment strategy.
    * @member {String} type
    */
    type = undefined;








}


