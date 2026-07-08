---
slug: react-native-flatlist-onendreached
title: react native FlatList 下拉加载更多分页数据
category: ReactNative
type: snippet
description: react native FlatList 下拉加载更多分页数据。
status: published
tags: RN, FlatList
updatedAt: 2023-11-20
---

一. 官方文档
[flatlist文档](https://reactnative.dev/docs/flatlist "flatlist文档")
[onendreached方法](https://reactnative.dev/docs/virtualizedlist#onendreached "onendreached方法")
二、相关代码

```jsx
import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";

const MyFlatListWithLoadMore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // 初始化数据
    fetchData();
  }, []);

  const fetchData = async () => {
    // 模拟异步加载数据
    setLoading(true);

    try {
      // 发送网络请求或其他数据获取操作
      const response = await fetch(`https://api.example.com/data?page=${page}`);
      const newData = await response.json();

      // 更新数据
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text>{item.name}</Text>
    </View>
  );

  const renderFooter = () => {
    // 显示加载更多指示器
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  };

  const handleEndReached = () => {
    // 当滚动到底部时触发加载更多
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      ListFooterComponent={renderFooter}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1} // 触发加载更多的阈值
    />
  );
};

export default MyFlatListWithLoadMore;
```
