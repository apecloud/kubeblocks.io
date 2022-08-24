# 下一代数据管理平台

1. 我们处在数据库产品发展的爆发期**

数据库处于一个产品爆发时代，新的数据产品层出不穷，数量从个位数发展到目前的三位数，数据库类型也从传统的TP数据库扩展到TP/AP/NewSQL等数据库，数据库也从通用型往行业领域型细化拓展，典型如Redis/MongoDB/InfluxDB；用户对数据库的使用场景也越来越复杂，一般一个用户会使用至少5种以上的数据库产品，比如使用MySQL+Redis+MongoDB支撑在线业务，使用Kafka+Hadoop支持离线业务，部分用户还会使用自研的有状态数据产品，比如专用的广告点击引擎，多种数据库的管理对用户是一种比较大的技术挑战和成本支出。

**2. 云厂商无法做到开源中立**

云数据库厂商无法有效覆盖所有数据库，云厂商虽然有公开的数据管理平台，但是出于成本和商业化收益的考虑，云平台只能支撑几款主流的数据库，对于长尾部分很难覆盖；而且云平台很难解决第三方专有开源license的产品支持问题，本质上是云厂商无法做到开源中立。

**3. The requirement of multi-cloud and hybrid cloud management**

You may use not single cloud platforms (aws、axure、Google cloud) and with self-built cloud platforms (hybrid cloud). And cloud vendors cannot be neutral about open source software; We provide a easy way for database management and long-term maintenance.


**4. The chronic problem of data silo**

We provide a unified data management interface. Under a unified management interface, effective unification can be achieved off-line. This is a problem that the current data lake and data warehouse products can not effectively solve, and the data lake itself is another relatively large data silo.

**5. Open source software provided**

Open source is now definitely the main stream. We provide the open source version of software.

