<template>
	<div>
		<form novalidate class="md-layout" @submit.prevent="validateUser">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">Create an Account</div>
				</md-card-header>

				<md-card-content>
					<div class="md-layout md-gutter">
						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('firstName')">
								<label for="first-name">First Name</label>
								<md-input
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									v-model="form.firstName"
									:disabled="sending"
								/>
								<span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
								<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
							</md-field>
						</div>

						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('lastName')">
								<label for="last-name">Last Name</label>
								<md-input
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									v-model="form.lastName"
									:disabled="sending"
								/>
								<span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
								<span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
							</md-field>
						</div>
					</div>

					<div class="md-layout md-gutter">
						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('gender')">
								<label for="gender">Gender</label>
								<md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
									<md-option value="Male">Male</md-option>
									<md-option value="Female">Female</md-option>
								</md-select>
								<span class="md-error">The gender is required</span>
							</md-field>
						</div>

						<div class="md-layout-item md-small-size-100">
							<md-field :class="getValidationClass('age')">
								<label for="age">Age</label>
								<md-input
									type="number"
									id="age"
									name="age"
									autocomplete="age"
									v-model="form.age"
									:disabled="sending"
								/>
								<span class="md-error" v-if="!$v.form.age.required">The age is required</span>
								<span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
							</md-field>
						</div>
					</div>

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

					<md-field :class="getValidationClass('confirmPassword')">
						<label for="confirmPassword">Confirm Password</label>
						<md-input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							v-model="form.confirmPassword"
							:disabled="sending"
						/>
						<span class="md-error" v-if="!$v.form.confirmPassword.required">Please confirm your password</span>
						<span
							class="md-error"
							v-else-if="!$v.form.confirmPassword.sameAsPassword"
						>The passwords do not match</span>
					</md-field>
					<md-card-actions>
						<md-button type="submit" class="md-primary" :disabled="sending">Sign Up</md-button>
					</md-card-actions>
					<span>
						Already have an account?
						<router-link to="/signin">Sign In</router-link>.
					</span>
				</md-card-content>
				<md-progress-bar md-mode="indeterminate" v-if="sending" />
			</md-card>
			<md-snackbar :md-active.sync="emailInUse">That email address is already in use.</md-snackbar>
		</form>
	</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
	required,
	email,
	sameAs,
	minValue,
	minLength,
	maxLength
} from "vuelidate/lib/validators";

export default {
	name: "FormValidation",
	mixins: [validationMixin],
	data: () => ({
		form: {
			firstName: null,
			lastName: null,
			gender: null,
			age: null,
			email: null,
			password: null,
			confirmPassword: null
		},
		weakPassword: false,
		emailInUse: false,
		sending: false
	}),
	validations: {
		form: {
			firstName: {
				required,
				minLength: minLength(3)
			},
			lastName: {
				required,
				minLength: minLength(3)
			},
			age: {
				required,
				maxLength: maxLength(3),
				minValue: minValue(18)
			},
			gender: {
				required
			},
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(6)
			},
			confirmPassword: {
				required,
				sameAsPassword: sameAs("password")
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
		async saveUser() {
			this.sending = true;
			try {
				const resp = await fetch("api/users/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json"
					},
					body: JSON.stringify({
						name: this.form.firstName + " " + this.form.lastName,
						age: this.form.age,
						gender: this.form.gender,
						email: this.form.email,
						password: this.form.password
					})
				});

				if (resp.status === 204) {
					this.$router.push("/app");
				} else {
					const data = await resp.json();
					if (data.code === "auth/email-already-in-use") {
						this.emailInUse = true;
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
				this.saveUser();
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
