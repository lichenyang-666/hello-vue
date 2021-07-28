<template>
	<div class="login">
		<div class="login-form">
			<el-form :model="form" ref="form">
				<el-form-item label="用户名" label-width="80px">
					<el-input v-model="form.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" label-width="80px">
					<el-input v-model="form.password"></el-input>
				</el-form-item>
				<el-form-item class="form-button">
					<el-button>登录</el-button>
					<el-button @click="resat">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			form: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		resat() {
			this.form.username = '';
			this.form.password = '';
		}
	}
}
</script>

<style lang="scss">
.login {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	.login-form {
		width: 40%;
		padding: 100px 24px;
    border: 1px solid;
	}
}
</style>