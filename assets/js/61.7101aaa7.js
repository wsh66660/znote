(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{616:function(t,s,v){"use strict";v.r(s);var _=v(3),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("Boxx"),t._v(" "),v("h2",{attrs:{id:"list和map"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#list和map"}},[t._v("#")]),t._v(" List和Map")]),t._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("1. 接口和抽象类之间的区别？")]),v("ol",[v("li",[v("p",[t._v("分别表示的"),v("strong",[t._v("类型不同")])]),t._v(" "),v("p",[t._v("接口："),v("strong",[t._v("interface")]),v("br"),t._v("\n抽象类："),v("strong",[t._v("class")])])]),t._v(" "),v("li",[v("p",[t._v("里面"),v("strong",[t._v("定义的属性修饰符不同")])]),t._v(" "),v("p",[t._v("接口：里面定义的属性默认都是静态的最终变量（public static final）"),v("br"),t._v("\n抽象类：里面定义的属性默认是（default）")])]),t._v(" "),v("li",[v("p",[t._v("里面"),v("strong",[t._v("定义的方法不同")])]),t._v(" "),v("p",[t._v("接口：里面定义的方法默认都是抽象方法（public abstarct）"),v("br"),t._v("\n从 jdk8.0开始 接口里面可以定义普通方法"),v("br"),t._v("\n抽象类：里面既可以定义抽象方法 又可以定义普通方法")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("2. ArrayList和Vector之间的区别？")]),v("ul",[v("li",[v("p",[v("em",[v("strong",[t._v("Vector")])]),t._v("：同一时间允许单个线程进行访问 效率较低，但是不会出现并发错误"),v("br"),t._v(" "),v("em",[v("strong",[t._v("ArrayList")])]),t._v("：同一时间允许多个线程进行访问 效率较高，但是可能会出现并发错误")])]),t._v(" "),v("li",[v("p",[t._v("从jdk5.0开始 集合的工具类里面提供一个方法("),v("em",[v("strong",[t._v("synchronizedList")])]),t._v(") 可以将线程不安全的ArrayList对象变成线程安全的集合对象，于是Vector渐渐被淘汰")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("3. ArrayList和LinkedList之间的区别？")]),v("ul",[v("li",[v("p",[v("em",[v("strong",[t._v("ArrayList")])]),t._v("：底层基于"),v("strong",[t._v("数组")]),t._v("实现的")]),t._v(" "),v("p",[t._v("优点：随机访问 遍历查找效率高"),v("br"),t._v("\n缺点：添加/删除元素")])]),t._v(" "),v("li",[v("p",[v("em",[v("strong",[t._v("LinkedList")])]),t._v("：底层基于"),v("strong",[t._v("链表")]),t._v("实现的")]),t._v(" "),v("p",[t._v("优点：添加/删除元素效率高"),v("br"),t._v("\n缺点：随机访问/遍历查找效率低")])]),t._v(" "),v("li",[v("p",[t._v("*：当正常开发的时候 尽量避免使用LinkedList里面的get(下标)方法")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("4. HashMap和Hashtable之间的区别？")]),v("ol",[v("li",[v("p",[t._v("同步特性不同：")]),t._v(" "),v("ul",[v("li",[v("em",[v("strong",[t._v("HashMap")])]),t._v(" 同一时间允许多个线程进行访问 "),v("strong",[t._v("效率较高")]),t._v("，但是"),v("strong",[t._v("可能会出现并发错误")])]),t._v(" "),v("li",[v("em",[v("strong",[t._v("Hashtable")])]),t._v(" 同一时间允许一个线程进行访问 "),v("strong",[t._v("效率较低")]),t._v("，但是"),v("strong",[t._v("不会出现并发错误")])]),t._v(" "),v("li",[t._v("从jdk5.0开始，集合的工具类里面提供一个方法（"),v("em",[v("strong",[t._v("synchronizedList")])]),t._v("） 可以将线程不安全的HashMap对象变成线程安全的集合对象")])])]),t._v(" "),v("li",[v("p",[t._v("对null的要求不同")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("HashMap无论主键还是值都可以存放null")]),t._v("，但是由于主键唯一 所以主键只能添加一个null")]),t._v(" "),v("li",[t._v("Hashtable无论主键还是值都不能装null，一旦泛型里面装null 都会触发NullPointerException")])])]),t._v(" "),v("li",[v("p",[t._v("底层分组不同：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("HashMap底层数组大小默认为16")]),t._v("，程序员可以随意的定义，但是最终一定是2的n次方数")]),t._v(" "),v("li",[t._v("Hashtable底层数组大小默认为11，程序员可以随意定义")])])]),t._v(" "),v("li",[v("p",[t._v("出现的版本不同")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Hashtable：since jdk1.0")])]),t._v(" "),v("li",[v("strong",[t._v("HashMap：since jdk1.2")])])])])])]),v("h2",{attrs:{id:"泛型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")]),t._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[t._v("1. 泛型中的通配符 T，E，K，V，？")]),v("p",[t._v("本质上这些个都是通配符，没啥区别，换成 A-Z 之间的任何一个 字母都可以。"),v("br"),t._v("\n通常情况下，T，E，K，V，？ 是这样约定的：")]),t._v(" "),v("ul",[v("li",[t._v("？ 表示不确定的 java 类型")]),t._v(" "),v("li",[t._v("T (type) 表示具体的一个java类型")]),t._v(" "),v("li",[t._v("K V (key value) 分别代表java键值中的Key Value")]),t._v(" "),v("li",[t._v("E (element) 代表Element")])]),t._v(" "),v("blockquote",[v("p",[t._v("可参考："),v("a",{attrs:{href:"https://juejin.im/post/5d5789d26fb9a06ad0056bd9#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),v("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);