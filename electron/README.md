#COSC 490
**Hello Everyone.**
~~~

For help with Selenium WebDriver refer to:
  https://www.selenium.dev/documentation/en/getting_started/
or:
  https://selenium-python.readthedocs.io/index.html
  for more detailed docs.

To run the file make sure you're in the folder called eletron(yes I know i spelled it wrong english isn't my strong suite okay!)


10s037@daniels-mbp untitled % ls
eletron
10s037@daniels-mbp untitled % cd eletron/py
10s037@daniels-mbp py % python3 -m venv env
10s037@daniels-mbp py % source env/bin/activate
(env) 10s037@daniels-mbp py % pip3 install zerorpc
Collecting zerorpc
  Using cached https://files.pythonhosted.org/packages/c5/f9/2ada1ffbc1f89708fbbebd67806417d7ada0262484b743345289e6d4c637/zerorpc-0.6.3-py3-none-any.whl
Collecting gevent>=1.1 (from zerorpc)
  Using cached https://files.pythonhosted.org/packages/8f/e8/6bb46c451d881d02216d2219374ef69853b78d52194f622d474d49efe2ce/gevent-1.4.0-cp37-cp37m-macosx_10_9_x86_64.whl
Collecting pyzmq>=13.1.0 (from zerorpc)
  Using cached https://files.pythonhosted.org/packages/2a/55/b6ae78c63ab164715aa4915caed44b7bdfb03af0a421edbbf198b6f9371d/pyzmq-19.0.0-cp37-cp37m-macosx_10_9_x86_64.whl
Collecting future (from zerorpc)
  Using cached https://files.pythonhosted.org/packages/45/0b/38b06fd9b92dc2b68d58b75f900e97884c45bedd2ff83203d933cf5851c9/future-0.18.2.tar.gz
Collecting msgpack>=0.5.2 (from zerorpc)
  Using cached https://files.pythonhosted.org/packages/df/d4/f3d0368b87c6a474e4ea19c4e30244604426c4668ae3d23cc49895f46fc4/msgpack-1.0.0-cp37-cp37m-macosx_10_13_x86_64.whl
Collecting greenlet>=0.4.14; platform_python_implementation == "CPython" (from gevent>=1.1->zerorpc)
  Using cached https://files.pythonhosted.org/packages/f8/e8/b30ae23b45f69aa3f024b46064c0ac8e5fcb4f22ace0dca8d6f9c8bbe5e7/greenlet-0.4.15.tar.gz
Installing collected packages: greenlet, gevent, pyzmq, future, msgpack, zerorpc
  Running setup.py install for greenlet ... done
  Running setup.py install for future ... done
Successfully installed future-0.18.2 gevent-1.4.0 greenlet-0.4.15 msgpack-1.0.0 pyzmq-19.0.0 zerorpc-0.6.3
You are using pip version 10.0.1, however version 20.0.2 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
(env) 10s037@daniels-mbp py % pip3 install selenium
Collecting selenium
  Using cached https://files.pythonhosted.org/packages/80/d6/4294f0b4bce4de0abf13e17190289f9d0613b0a44e5dd6a7f5ca98459853/selenium-3.141.0-py2.py3-none-any.whl
Collecting urllib3 (from selenium)
  Using cached https://files.pythonhosted.org/packages/e8/74/6e4f91745020f967d09332bb2b8b9b10090957334692eb88ea4afe91b77f/urllib3-1.25.8-py2.py3-none-any.whl
Installing collected packages: urllib3, selenium
Successfully installed selenium-3.141.0 urllib3-1.25.8
You are using pip version 10.0.1, however version 20.0.2 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
(env) 10s037@daniels-mbp py % python3 api.py 
  File "api.py", line 3
    imporstt os
              ^
SyntaxError: invalid syntax
(env) 10s037@daniels-mbp py % python3 api.py
Traceback (most recent call last):
  File "api.py", line 112, in <module>
    main()
  File "api.py", line 105, in main
    s.bind(addr)
  File "/Users/10s037/WebstormProjects/untitled/eletron/py/env/lib/python3.7/site-packages/zerorpc/socket.py", line 43, in bind
    return self._events.bind(endpoint, resolve)
  File "/Users/10s037/WebstormProjects/untitled/eletron/py/env/lib/python3.7/site-packages/zerorpc/events.py", line 325, in bind
    r.append(self._socket.bind(endpoint_))
  File "zmq/backend/cython/socket.pyx", line 550, in zmq.backend.cython.socket.Socket.bind
  File "zmq/backend/cython/checkrc.pxd", line 26, in zmq.backend.cython.checkrc._check_rc
zmq.error.ZMQError: Address already in use
