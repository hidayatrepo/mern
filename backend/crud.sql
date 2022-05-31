/*
 Navicat Premium Data Transfer

 Source Server         : #LOCAL_MONGO
 Source Server Type    : MongoDB
 Source Server Version : 50008
 Source Host           : localhost:27017
 Source Schema         : crud

 Target Server Type    : MongoDB
 Target Server Version : 50008
 File Encoding         : 65001

 Date: 31/05/2022 00:03:31
*/


// ----------------------------
// Collection structure for cl_data
// ----------------------------
db.getCollection("cl_data").drop();
db.createCollection("cl_data");

// ----------------------------
// Documents of cl_data
// ----------------------------
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294de2fe837000002002f3a"),
    nama: "Toples Lemony 1000",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: "1"
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294deafe837000002002f3b"),
    nama: "Toples Lemony 1800",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294deb0e837000002002f3c"),
    nama: "Toples Lemony 2500",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294deb1e837000002002f3d"),
    nama: "Toples Gracia 4L",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294deb2e837000002002f3e"),
    nama: "Toples Gracia 6L",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294deb2e837000002002f3f"),
    nama: "Toples Gracia 9L",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294debde837000002002f41"),
    nama: "Toples Gracia 18L",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294dec7e837000002002f42"),
    nama: "Toples Donat Varia",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294dec8e837000002002f43"),
    nama: "Toples Donat Gody",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294dec9e837000002002f44"),
    nama: "Top Astor 821",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);
db.getCollection("cl_data").insert([ {
    _id: ObjectId("6294decae837000002002f45"),
    nama: "Top Astor 823",
    nominal: "20000",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: 1
} ]);

// ----------------------------
// Collection structure for cl_datas
// ----------------------------
db.getCollection("cl_datas").drop();
db.createCollection("cl_datas");

// ----------------------------
// Documents of cl_datas
// ----------------------------

// ----------------------------
// Collection structure for cl_level
// ----------------------------
db.getCollection("cl_level").drop();
db.createCollection("cl_level");

// ----------------------------
// Documents of cl_level
// ----------------------------
db.getCollection("cl_level").insert([ {
    _id: ObjectId("6294ddcfe837000002002f37"),
    nama: "BOSS",
    flag: "1"
} ]);
db.getCollection("cl_level").insert([ {
    _id: ObjectId("6294ddd5e837000002002f38"),
    nama: "ADMIN",
    flag: "1"
} ]);
db.getCollection("cl_level").insert([ {
    _id: ObjectId("6294dddae837000002002f39"),
    nama: "STAFF",
    flag: "1"
} ]);

// ----------------------------
// Collection structure for cl_token
// ----------------------------
db.getCollection("cl_token").drop();
db.createCollection("cl_token");

// ----------------------------
// Documents of cl_token
// ----------------------------
db.getCollection("cl_token").insert([ {
    _id: ObjectId("6294dd95e837000002002f36"),
    "id_user": "6294dcdbe837000002002f34",
    token: "123123123",
    "created_at": "2022-05-30 22:00:00",
    "expired_at": "2022-06-30 22:00:00",
    flag: "1"
} ]);

// ----------------------------
// Collection structure for cl_user
// ----------------------------
db.getCollection("cl_user").drop();
db.createCollection("cl_user");

// ----------------------------
// Documents of cl_user
// ----------------------------
db.getCollection("cl_user").insert([ {
    _id: ObjectId("6294dcdbe837000002002f34"),
    nama: "Rochmad Hidayat",
    username: "dayat",
    "id_level": "6294ddcfe837000002002f37",
    password: "123",
    logo: "/static/img/thumnail/123.png",
    "created_at": "2022-05-30 22:00:00",
    "created_by": "6294dcdbe837000002002f34",
    "updated_at": "2022-05-30 22:00:00",
    "updated_by": "6294dcdbe837000002002f34",
    "deleted_at": "2022-05-30 22:00:00",
    "deleted_by": "6294dcdbe837000002002f34",
    flag: "1"
} ]);
