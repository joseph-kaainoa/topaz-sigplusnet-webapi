# Topaz SigPlusNET WebAPI

This is an attempt to create a WebAPI to interact with a Topaz Signature Pad.  The SigWeb component <https://www.topazsystems.com/sigweb.html> is similar to this, but it uses a hard-coded hostname of tablet.sigwebtablet.com to communicate with the client.  It uses the SigPlusNET assembly to create a service that will respond to requests.

While the SigPlusNet <https://www.topazsystems.com/sigplusnet.html> has the same assembly, it uses an older version, v 2.0.0.42.  The included assembly in SigWeb is v 2.0.0.45.  It has a different file size and the newer one has a new constructor as well.

Originally, this was created in .Net Core, but the assembly was originally used in a WinForm and requires that library.  Because of this, the project was created in the full framework.