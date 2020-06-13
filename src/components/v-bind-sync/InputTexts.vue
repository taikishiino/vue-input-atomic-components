<template>
  <div>
    <label>
      メールアドレス
      <input
        type="text"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </label>
    <label>
      パスワード
      <input
        type="password"
        :value="password"
        @input="$emit('update:password', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ""
    },
    password: {
      type: String,
      default: ""
    }
  }
};
</script>