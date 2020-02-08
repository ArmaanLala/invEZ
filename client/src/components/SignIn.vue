<template>
	<div>
		<form novalidate class="md-layout" @submit.prevent="validateUser">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">Sign In</div>
				</md-card-header>

				<md-card-content>
					<md-field :class="getValidationClass('email')">
						<label for="email">Email</label>
						<md-input
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							v-model="form.email"
							:disabled="sending"
						/>
						<span class="md-error" v-if="!$v.form.email.required">The email is required</span>
						<span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
					</md-field>

					<md-field :class="getValidationClass('password')">
						<label for="password">Password</label>
						<md-input
							type="password"
							name="password"
							id="password"
							autocomplete="password"
							v-model="form.password"
							:disabled="sending"
						/>
						<span class="md-error" v-if="!$v.form.password.required">The password is required</span>
						<span class="md-error" v-else-if="!$v.form.password.password">Invalid password</span>
					</md-field>
				</md-card-content>

				<md-progress-bar md-mode="indeterminate" v-if="sending" />

				<md-card-actions>
					<md-button type="submit" class="md-primary" :disabled="sending">Sign In</md-button>
				</md-card-actions>
				<span>
					Don't have an account?
					<router-link to="/signup">Sign Up</router-link>.
				</span>
			</md-card>

			<md-snackbar :md-active.sync="noLinkedEmail">We could not find an account attached to this email.</md-snackbar>
		</form>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
	name: "SignIn",
	mixins: [validationMixin],
	data: () => ({
		form: {
			email: null,
			password: null
		},
		sending: false,
		noLinkedEmail: false
	}),
	validations: {
		form: {
			email: {
				required,
				email
			},
			password: {
				required
			}
		}
	},
	methods: {
		getValidationClass(fieldName) {
			const field = this.$v.form[fieldName];

			if (field) {
				return {
					"md-invalid": field.$invalid && field.$dirty
				};
			}
		},
		async signInUser() {
			this.sending = true;
			try {
				const resp = await fetch('/api/users/signin', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: JSON.stringify({
						email: this.form.email,
						password: this.form.password
					})
				});

				if (resp.status === 204) {
					this.$router.push('/app');
				} else {
					const data = await resp.json();
					if (data.code === 'auth/user-not-found') {
						this.noLinkedEmail = true;
					}
				}
			} catch (err) {
				console.error(err);
			}
			this.sending = false;
		},
		validateUser() {
			this.$v.$touch();

			if (!this.$v.$invalid) {
				this.signInUser();
			}
		}
	}
};
</script>

<style scoped>
.md-progress-bar {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}

form {
	margin: auto;
	justify-content: center;
	width: 100%;
	max-width: 1200px;
}
</style>
