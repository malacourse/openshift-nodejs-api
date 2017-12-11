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
import IoK8sKubernetesPkgApiV1EnvVar from './IoK8sKubernetesPkgApiV1EnvVar';





/**
* The ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook model module.
* @module model/ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook
* @version v3.6.173.0.21
*/
export default class ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook {
    /**
    * Constructs a new <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook</code>.
    * ExecNewPodHook is a hook implementation which runs a command in a new pod based on the specified container which is assumed to be part of the deployment template.
    * @alias module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook
    * @class
    * @param command {Array.<String>} Command is the action command and its arguments.
    * @param containerName {String} ContainerName is the name of a container in the deployment pod template whose Docker image will be used for the hook pod's container.
    */

    constructor(command, containerName) {
        

        
        

        this['command'] = command;this['containerName'] = containerName;

        
    }

    /**
    * Constructs a <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook} obj Optional instance to populate.
    * @return {module:model/ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook} The populated <code>ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComGithubOpenshiftOriginPkgDeployApisAppsV1ExecNewPodHook();

            
            
            

            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], ['String']);
            }
            if (data.hasOwnProperty('containerName')) {
                obj['containerName'] = ApiClient.convertToType(data['containerName'], 'String');
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], [IoK8sKubernetesPkgApiV1EnvVar]);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Command is the action command and its arguments.
    * @member {Array.<String>} command
    */
    command = undefined;
    /**
    * ContainerName is the name of a container in the deployment pod template whose Docker image will be used for the hook pod's container.
    * @member {String} containerName
    */
    containerName = undefined;
    /**
    * Env is a set of environment variables to supply to the hook pod's container.
    * @member {Array.<module:model/IoK8sKubernetesPkgApiV1EnvVar>} env
    */
    env = undefined;
    /**
    * Volumes is a list of named volumes from the pod template which should be copied to the hook pod. Volumes names not found in pod spec are ignored. An empty list means no volumes will be copied.
    * @member {Array.<String>} volumes
    */
    volumes = undefined;








}

