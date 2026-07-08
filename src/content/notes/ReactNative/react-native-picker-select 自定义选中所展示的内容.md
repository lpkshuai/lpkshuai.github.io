---
slug: react-native-picker-select
title: react-native-picker-select 自定义选中所展示的内容
category: ReactNative
type: snippet
description: react-native-picker-select组件下拉选择时，默认选择框选中内容展示为label字段。如果需要显示为value或其他字段，可以进行自定义设置。
status: published
tags: RN, select
updatedAt: 2023-11-20
---

react native 中 使用 `react-native-picker-select` 组件库实现下拉选择时，在默认条件下，选择框选中内容展示为label字段。如果需要显示为value或其他字段，可以进行自定义设置。代码如下：

```jsx
import RNPickerSelect from "react-native-picker-select";

export const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const pickerItems = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <RNPickerSelect
      onValueChange={(value) => setSelectedValue(value)}
      items={pickerItems}
      value={selectedValue}
      textInputProps={{ value: selectedValue }} // 设置选中的值为文本框的值
    />
  );
};
```

> 上述代码中 textInputProps 属性被用来设置文本框的属性，其中的 value 属性被设置为 selectedValue，这样就会使得文本框中显示选中的值。而 items 数组中的 label 仍然会在选择器中显示。
