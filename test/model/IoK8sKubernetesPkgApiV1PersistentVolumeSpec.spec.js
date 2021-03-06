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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenShiftApiWithKubernetes);
  }
}(this, function(expect, OpenShiftApiWithKubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IoK8sKubernetesPkgApiV1PersistentVolumeSpec', function() {
    it('should create an instance of IoK8sKubernetesPkgApiV1PersistentVolumeSpec', function() {
      // uncomment below and update the code to test IoK8sKubernetesPkgApiV1PersistentVolumeSpec
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be.a(OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec);
    });

    it('should have the property accessModes (base name: "accessModes")', function() {
      // uncomment below and update the code to test the property accessModes
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property awsElasticBlockStore (base name: "awsElasticBlockStore")', function() {
      // uncomment below and update the code to test the property awsElasticBlockStore
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property azureDisk (base name: "azureDisk")', function() {
      // uncomment below and update the code to test the property azureDisk
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property azureFile (base name: "azureFile")', function() {
      // uncomment below and update the code to test the property azureFile
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property cephfs (base name: "cephfs")', function() {
      // uncomment below and update the code to test the property cephfs
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property cinder (base name: "cinder")', function() {
      // uncomment below and update the code to test the property cinder
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property claimRef (base name: "claimRef")', function() {
      // uncomment below and update the code to test the property claimRef
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property fc (base name: "fc")', function() {
      // uncomment below and update the code to test the property fc
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property flexVolume (base name: "flexVolume")', function() {
      // uncomment below and update the code to test the property flexVolume
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property flocker (base name: "flocker")', function() {
      // uncomment below and update the code to test the property flocker
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property gcePersistentDisk (base name: "gcePersistentDisk")', function() {
      // uncomment below and update the code to test the property gcePersistentDisk
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property glusterfs (base name: "glusterfs")', function() {
      // uncomment below and update the code to test the property glusterfs
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostPath (base name: "hostPath")', function() {
      // uncomment below and update the code to test the property hostPath
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property iscsi (base name: "iscsi")', function() {
      // uncomment below and update the code to test the property iscsi
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property nfs (base name: "nfs")', function() {
      // uncomment below and update the code to test the property nfs
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property persistentVolumeReclaimPolicy (base name: "persistentVolumeReclaimPolicy")', function() {
      // uncomment below and update the code to test the property persistentVolumeReclaimPolicy
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property photonPersistentDisk (base name: "photonPersistentDisk")', function() {
      // uncomment below and update the code to test the property photonPersistentDisk
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property portworxVolume (base name: "portworxVolume")', function() {
      // uncomment below and update the code to test the property portworxVolume
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property quobyte (base name: "quobyte")', function() {
      // uncomment below and update the code to test the property quobyte
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property rbd (base name: "rbd")', function() {
      // uncomment below and update the code to test the property rbd
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property scaleIO (base name: "scaleIO")', function() {
      // uncomment below and update the code to test the property scaleIO
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property storageClassName (base name: "storageClassName")', function() {
      // uncomment below and update the code to test the property storageClassName
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property vsphereVolume (base name: "vsphereVolume")', function() {
      // uncomment below and update the code to test the property vsphereVolume
      //var instane = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApiV1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

  });

}));
