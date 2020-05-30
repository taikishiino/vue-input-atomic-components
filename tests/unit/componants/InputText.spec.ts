import { shallowMount, Wrapper } from '@vue/test-utils'
import { Vue } from 'vue/types/vue'
import InputText from '@/components/InputText.vue'

describe('InputText.vue', () => {
  let inputWrapper: any

  const propsData = {
    value: '',
    type: 'text',
    placeholder: 'プレースフォルダ',
    disabled: false
  }

  const testDataList = [
    'testtest', 'test test', 'testtest　testtest', 0
  ]

  beforeEach(() => {
    const wrapper: Wrapper<Vue> = shallowMount(InputText, {
      // propsプロパティの設定
      propsData: propsData
    })
    inputWrapper = wrapper.find('input')
  })

  test('返り値が文字列型になっていること', () => {
    testDataList.forEach((testData, index) => {
      inputWrapper.setValue(testData)
      expect(inputWrapper.emitted()['input'][index]).toEqual([testData.toString()])
    })
  })
})