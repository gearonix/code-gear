import { Select as AntdSelect } from 'antd'

interface SelectProps<T> {
  onChange: (val: T) => void
  value: T
  options: {
    value: T
    label: string | number
  }[]
  defaultValue?: T
}

export const Select = <T,>({
  onChange,
  value,
  options,
  defaultValue
}: SelectProps<T>) => {
  return (
    <AntdSelect
      size="middle"
      onChange={onChange}
      value={value}
      style={{ width: 200 }}
      options={options}
      defaultValue={defaultValue}
    />
  )
}
