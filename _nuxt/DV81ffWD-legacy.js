System.register(["./CJ8BfrT8-legacy.js","./BQCBQltM-legacy.js","./8j4WEYFH-legacy.js","./BdJCHSB7-legacy.js","./DkuIadS1-legacy.js","./C9RanOyW-legacy.js","./CeQRVgCP-legacy.js","./Babml-Wy-legacy.js","./BBHugG4S-legacy.js","./DYPAtiX--legacy.js","./BChi-rsl-legacy.js","./gBTgZgTU-legacy.js"],(function(e,c){"use strict";var f,a,b,J,d;return{setters:[e=>{f=e._},e=>{a=e.r,b=e.e,J=e.f,d=e.o},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",{__name:"2048",setup(e){const c=a("7bJ61727469636c65J3a7bJ6964J3a323034382cJ7469746c65J3aJe4bdbfe794a84O56c702e6a73e5928ce9809ae9858de6a8a1e5bc8fe59ca8e98082e5bd93e4bd8de7bdaE4bfaE694b9e69687e4=6efbcPe79B8e5908ce79baE6a087efbc89TcJ617574686f7T3a32343632352cJ62726965NJ3aJe6P91e69c89e4bP0e4b8A6O56c70e4=be58A1efbc8ce8af95e59BE5b0862e73637373e69687e4=6e8bdace68da2e4b8ba2e637373e69687e4=6efbcPe4bdbfe794a86O56c702d727562792d73617373efbc89efbc8ce784b6e5908E5b086e7949fe6P90e79a842e637373e69687e4=6e694bE5Pb0e689bE5Pb0e58e9fe5a78be69687e4=6e79a84e4bd8de7bdaE38082eQ7aE9a298e698afefbc8c2e2e2eTcJ74696d65437265617465J3aJ323032302d30K2d31385430373aU73a30312e3030305aTcJ74696d6W7064617465J3aJ323032302d30K2d31385430373aU73a30312e3030305aTcJ74797065J3aJKTcJX5617475726549LJ3a313734352cJ72656164J3a313139K2cJ6c696b65J3a38363JcJ636f6e74656e74J3aJ3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E6P91e69c89e4bP0e4b8A6O56c70e4=be58A1efbc8ce8af95e59BE5b0862e73637373e69687e4=6e8bdace68da2e4b8ba2e637373e69687e4=6efbcPe4bdbfe794a86O56c702d727562792d73617373efbc89efbc8ce784b6e5908E5b086e7949fe6P90e79a842e637373e69687e4=6e694bE5Pb0e689bE5Pb0e58e9fe5a78be69687e4=6e79a84e4bd8de7bdaE380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3EQ7aE9a298e698afefbc8ce794b1e4ba8E6P91e4bdbfe794a8e79a84e698afe9818de58e86e6a8a1e5bc8fefbc8ce59ba0e6ada4e6P91e4bPde4bP0e5ae9ae79fa5e98193e58e9fe5a78be69687e4=6e79a84e5ad98e582a8e4bd8de7bdaE380823c2fXf6e743e3c2fXf6e743e3c2f703e5c6e5c6e3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E59ca8e4bPbeQda2e79a84e4Ba3e7a081e4b8adefbc8ce6P91e5b09de8af95e4bdbfe794a86O56c702d746170e8bf9be585a5e6b581e5b9b6e689bE587bae4B8E4b8ade8afBe58f96e6b581e79a84e5bd93e5898de69687e4=6e79a84e69687e4=6e8b7afe5be84efbc9a3c2fXf6e743e3c2fXf6e743e3c2f703e5c6e5c6e3c7072653e3c636f64653e6O56c702e7461736b2827636f6e7N5727453617373272c20N756e6374696f6e2829207b3cXf6e743e3c2fXf6e743e5c6e202020207N17J0X96c654c6f636174696f6e203d205cJ5cJ3b3cXf6e743e3c2fXf6e743e5c6e202020206O56c702e737263285cJ736173732f2a2a2f2a2e736373735cT93cXf6e743e3c2fXf6e743e5c6e20202020202020202e7069706528736173732829293cXf6e743e3c2fXf6e743e5c6e20202020202020202e706970652874617028N756e6374696f6e28X96c652c74297b3cXf6e743e3c2fXf6e743e5c6e202020202020202020202020X96c654c6f636174696f6e203d20706174682e6469726e616d6528X96c652e70617468293b3cXf6e743e3c2fXf6e743e5c6e202020202020202020202020636f6e736f6c652e6c6f6728X96c654c6f636174696f6e293b3cXf6e743e3c2fXf6e743e5c6e20202020202020207d29293cXf6e743e3c2fXf6e743e5c6e20202020202020202e70697065286O56c702e6465737428X96c654c6f636174696f6e29293b3cXf6e743e3c2fXf6e743e5c6e7d293b3cXf6e743e3c2fXf6e743e5c6e3c2f636f64653e3c2f7072653e5c6e5c6e3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E6a0b9e68daE79a84e8be93e587ba3c2fXf6e743e3c2fXf6e743e3c636f64653e636f6e736f6c652e6c6f6728X96c654c6f636174696f6e293c2f636f64653e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3Efbc8ce6ada4e4Ba3e7a081e4bcbce4b98E5ba94e8afa5e58fafe4Ba5e6ada3e5b8b8e5b7a5e4bd9ce380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E4bd86e698afefbc8ce7949fe6P90e79a8L35353e69687e4=6e4bcbce4b98E6af94e6P91e69c9fe69c9be79a84e9ab98e4ba86e4bP0e4b8Ae79baE5bd95e380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E7B93e69e9ce5ba94e8afa5e59ca8e593Ae9878c3c2fXf6e743e3c2fXf6e743e3c636f64653e70726f6a6563742f736173732f7061727469616c7Kc2f636f64653e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3Efbc8ce69687e4=6e8b7afe5be84e5b0b1e698af3c2fXf6e743e3c2fXf6e743e3c636f64653e70726f6a6563742f7061727469616c7Kc2f636f64653e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E380823c2fXf6e743e3c2fXf6e743e3c2f703e5c6e5c6e3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E5a682e69e9ce8bfQe6a0b7e5819ae79a84e696b9e6b395e8a681e7ae80e58d95e5be97e5a49aefbc8ce982a3e4b9Pe6P91eP2afe5ae9ae4bc9ae69B4e5969ce6aca2e8afa5e8a7a3e586b3e696b9e6a1Pe380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E8b0a2e8b0a2efbc813c2fXf6e743e3c2fXf6e743e3c2f703eTcJ7465787454797065J3a312cJ636f6d6d656e7L36f756e74J3a3JcJ737461747573J3a312cJ62726965N506963J3aTJcJ746f70696349LJ3a31312cJ757365724167656e74J3aJ3131K2e38372e31U02e32U8TcJ6170706964J3a312cJ737469636bJ3a302cJ61636964J3a6e756c6c2cJ7072696365J3a6e756c6c2cJX96c656e616d65J3a6e756c6c2cJ73706563J3a6e756c6c2cJ736f75726365J3a6e756c6c2cJ736f75726365486569676874J3a6e756c6c2cJ736f7572636M76569676874J3a6e756c6c2cJ736563726574J3a6e756c6c2cJX5617475726M469746c65J3aJ4a617N1536372697074TcJ617574686f724e69636b4e616d65J3aJe89b8be89b8b497461636869TcJ70686f746fJ3aJ687474707Ka2f2fYY2e73616d796f632e636f6d2f75706c6f6164732f75736572732f392f696d616765732f7468756d626e61696c732f313538343637343938363137382e6a7067TcJ706179O656978696eJ3a6e756c6c2cJ7061797a6869N7562616fJ3a6e756c6c2cJ7369676e6174757265J3aTJcJ7N57269X96564537461747573J3a302cJ7N57269X96564526561736f6eJ3aTJcJ7061796d7367J3a6e756c6c2cJ746f7069635469746c65J3aJ435353TcJ746f70696350696374757265J3aJ687474707Ka2f2fYY2e73616d796f632e636f6d2f75706c6f6164732f75736572732f312f696d616765732f7468756d626e61696c732f3135U0UK13937303538K2e6a7067TcJ646fO6e6c6f6164J3a5b5d7d2cJ646973637573736573J3a5b7bJ6964J3a313235393JcJ617574686f7T3a323637U72cJ74696d65437265617465J3aJ323032302d30K2d31385430373aU73a30312e3030305aTcJ636f6e74656e74J3aJ3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E8bfQe6af94e695b0e5ad9731U131343037e5afbceP7b4e79a84e69B4e4b8bae7ae80e58d95e380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E682a8e6a0b9e69cace4bPdeQc80e8a681e68c87e5ae9ae79baE6a087e69687e4=6e5a4b9efbc8ce58fAeQc80e4bdbfe794a8e58db3e58faf3c2fXf6e743e3c2fXf6e743e3c636f64653e2e3c2f636f64653e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E380823c2fXf6e743e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E58fa6e5a496efbc8ce8afb7e7a1aE4bf9de8aebE7bdaE59fbae69cace79baE5bd95e380823c2fXf6e743e3c2fXf6e743e3c2f703e5c6e5c6e3c7072653e3c636f64653e6O56c702e737263285cJ736173732f2a2a2f2a2e736373735cTc207b20626173653a205cTe2f5cT07d293cXf6e743e3c2fXf6e743e5c6e202020202e7069706528736173732829293cXf6e743e3c2fXf6e743e5c6e202020202e70697065286O56c702e64657374285cTe5cT9293b3cXf6e743e3c2fXf6e743e5c6e3c2f636f64653e3c2f7072653eTcJ6c696b65J3a302cJ61727469636c65J3aJ32303438TcJ706172656e7L964J3a302cJ74797065J3a312cJ6170706964J3a312cJ6e69636b6e616d65J3aJe58fa4e4bP04e65617T2cJ70686f746fJ3aJ687474707Ka2f2fYY2e73616d796f632e636f6d2f75706c6f6164732f75736572732f392f696d616765732f7468756d626e61696c732f3135383436373439383438U82e6a7067TcJ7N57269X96564537461747573J3a302cJ7N57269X96564526561736f6eJ3aT27d2c7bJ6964J3a31323539312cJ617574686f7T3a3236U1392cJ74696d65437265617465J3aJ323032302d30K2d31385430373aU73a30312e3030305aTcJ636f6e74656e74J3aJ3c7072653e3c636f64653e6O56c702e737263285cJ736173732f2a2a2f2a2e736373735cT93cXf6e743e3c2fXf6e743e5c6e20202e7069706528736173732829293cXf6e743e3c2fXf6e743e5c6e20202e70697065286O56c702e6465737428N756e6374696f6e28X96c6529207b3cXf6e743e3c2fXf6e743e5c6e2020202072657475726e20X96c652e626173653b3cXf6e743e3c2fXf6e743e5c6e20207d29293b3cXf6e743e3c2fXf6e743e5c6e3c2f636f64653e3c2f7072653e5c6e5c6e3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E69c80e5P9de59ca8e8bfQe9878ce7BQe587bae7ad94e6a1Pefbc9a3c2fXf6e743e3c2fXf6e743e3c6120687265N3d5cJ687474707Ka2f2f737461636b6f7N572Xc6fO2e636f6d2f612f32393831373931362fU8U43534305cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e687474707Kc2fXf6e743e3c2fXf6e743e3c2f613e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e203a203c2fXf6e743e3c6120687265N3d5cJ687474707Ka2f2f737461636b6f7N572Xc6fO2e636f6d2f612f32393831373931362fU8U43534305cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e2f2f737461636b6f7N572Xc6fO2e636f6d2f612f32393831373931362fU8U43534303c2fXf6e743e3c2f613e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E380823c2fXf6e743e3c2fXf6e743e3c2f703e5c6e5c6e3c703e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3e3cXf6e74207374796c653d5cJ7N572746963616c2d616c69676e3a20696e68657269743b5cJ3E6P91e79fa5e98193e8bfQe4b8Ae7babfe7aPbe5bePe697a7efbc8ce4bd86e5ae83e4B8de784b6e698bE7a4bae4b8ba676f6f676c65e4bPae79a84e7acace4bP0e4b8Ae7B93e69e9cefbc8ce68980e4Ba5e6P91e8aea4e4b8bae69c80e5a5bde59ca8e6ada4e58f91e5bP3eQ3bE68ea5e380823c2fXf6e743e3c2fXf6e743e3c2f703eTcJ6c696b65J3a302cJ61727469636c65J3aJ32303438TcJ706172656e7L964J3a302cJ74797065J3a312cJ6170706964J3a312cJ6e69636b6e616d65J3aJ4O265656E6a8b1TcJ70686f746fJ3aJ687474707Ka2f2fYY2e73616d796f632e636f6d2f75706c6f6164732f75736572732f392f696d616765732f7468756d626e61696c732f313538343637U4303434U02e6a7067TcJ7N57269X96564537461747573J3a302cJ7N57269X96564526561736f6eJ3aT27d5d7d");return(e,a)=>{const X=f;return d(),b(X,{data:J(c)},null,8,["data"])}}})}}}));
