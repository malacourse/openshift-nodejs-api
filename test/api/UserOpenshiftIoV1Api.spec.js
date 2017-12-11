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
    instance = new OpenShiftApiWithKubernetes.UserOpenshiftIoV1Api();
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

  describe('UserOpenshiftIoV1Api', function() {
    describe('createUserOpenshiftIoV1Group', function() {
      it('should call createUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test createUserOpenshiftIoV1Group
        //instance.createUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserOpenshiftIoV1Identity', function() {
      it('should call createUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test createUserOpenshiftIoV1Identity
        //instance.createUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserOpenshiftIoV1User', function() {
      it('should call createUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test createUserOpenshiftIoV1User
        //instance.createUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createUserOpenshiftIoV1UserIdentityMapping', function() {
      it('should call createUserOpenshiftIoV1UserIdentityMapping successfully', function(done) {
        //uncomment below and update the code to test createUserOpenshiftIoV1UserIdentityMapping
        //instance.createUserOpenshiftIoV1UserIdentityMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1CollectionGroup', function() {
      it('should call deleteUserOpenshiftIoV1CollectionGroup successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1CollectionGroup
        //instance.deleteUserOpenshiftIoV1CollectionGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1CollectionIdentity', function() {
      it('should call deleteUserOpenshiftIoV1CollectionIdentity successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1CollectionIdentity
        //instance.deleteUserOpenshiftIoV1CollectionIdentity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1CollectionUser', function() {
      it('should call deleteUserOpenshiftIoV1CollectionUser successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1CollectionUser
        //instance.deleteUserOpenshiftIoV1CollectionUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1Group', function() {
      it('should call deleteUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1Group
        //instance.deleteUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1Identity', function() {
      it('should call deleteUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1Identity
        //instance.deleteUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1User', function() {
      it('should call deleteUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1User
        //instance.deleteUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserOpenshiftIoV1UserIdentityMapping', function() {
      it('should call deleteUserOpenshiftIoV1UserIdentityMapping successfully', function(done) {
        //uncomment below and update the code to test deleteUserOpenshiftIoV1UserIdentityMapping
        //instance.deleteUserOpenshiftIoV1UserIdentityMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserOpenshiftIoV1APIResources', function() {
      it('should call getUserOpenshiftIoV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getUserOpenshiftIoV1APIResources
        //instance.getUserOpenshiftIoV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUserOpenshiftIoV1Group', function() {
      it('should call listUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test listUserOpenshiftIoV1Group
        //instance.listUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUserOpenshiftIoV1Identity', function() {
      it('should call listUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test listUserOpenshiftIoV1Identity
        //instance.listUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUserOpenshiftIoV1User', function() {
      it('should call listUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test listUserOpenshiftIoV1User
        //instance.listUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUserOpenshiftIoV1Group', function() {
      it('should call patchUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test patchUserOpenshiftIoV1Group
        //instance.patchUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUserOpenshiftIoV1Identity', function() {
      it('should call patchUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test patchUserOpenshiftIoV1Identity
        //instance.patchUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUserOpenshiftIoV1User', function() {
      it('should call patchUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test patchUserOpenshiftIoV1User
        //instance.patchUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchUserOpenshiftIoV1UserIdentityMapping', function() {
      it('should call patchUserOpenshiftIoV1UserIdentityMapping successfully', function(done) {
        //uncomment below and update the code to test patchUserOpenshiftIoV1UserIdentityMapping
        //instance.patchUserOpenshiftIoV1UserIdentityMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUserOpenshiftIoV1Group', function() {
      it('should call readUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test readUserOpenshiftIoV1Group
        //instance.readUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUserOpenshiftIoV1Identity', function() {
      it('should call readUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test readUserOpenshiftIoV1Identity
        //instance.readUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUserOpenshiftIoV1User', function() {
      it('should call readUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test readUserOpenshiftIoV1User
        //instance.readUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readUserOpenshiftIoV1UserIdentityMapping', function() {
      it('should call readUserOpenshiftIoV1UserIdentityMapping successfully', function(done) {
        //uncomment below and update the code to test readUserOpenshiftIoV1UserIdentityMapping
        //instance.readUserOpenshiftIoV1UserIdentityMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserOpenshiftIoV1Group', function() {
      it('should call replaceUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test replaceUserOpenshiftIoV1Group
        //instance.replaceUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserOpenshiftIoV1Identity', function() {
      it('should call replaceUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test replaceUserOpenshiftIoV1Identity
        //instance.replaceUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserOpenshiftIoV1User', function() {
      it('should call replaceUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test replaceUserOpenshiftIoV1User
        //instance.replaceUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserOpenshiftIoV1UserIdentityMapping', function() {
      it('should call replaceUserOpenshiftIoV1UserIdentityMapping successfully', function(done) {
        //uncomment below and update the code to test replaceUserOpenshiftIoV1UserIdentityMapping
        //instance.replaceUserOpenshiftIoV1UserIdentityMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1Group', function() {
      it('should call watchUserOpenshiftIoV1Group successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1Group
        //instance.watchUserOpenshiftIoV1Group(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1GroupList', function() {
      it('should call watchUserOpenshiftIoV1GroupList successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1GroupList
        //instance.watchUserOpenshiftIoV1GroupList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1Identity', function() {
      it('should call watchUserOpenshiftIoV1Identity successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1Identity
        //instance.watchUserOpenshiftIoV1Identity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1IdentityList', function() {
      it('should call watchUserOpenshiftIoV1IdentityList successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1IdentityList
        //instance.watchUserOpenshiftIoV1IdentityList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1User', function() {
      it('should call watchUserOpenshiftIoV1User successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1User
        //instance.watchUserOpenshiftIoV1User(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchUserOpenshiftIoV1UserList', function() {
      it('should call watchUserOpenshiftIoV1UserList successfully', function(done) {
        //uncomment below and update the code to test watchUserOpenshiftIoV1UserList
        //instance.watchUserOpenshiftIoV1UserList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));