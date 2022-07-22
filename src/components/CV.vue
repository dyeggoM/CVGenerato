<template>
	<v-container class="container">
		<v-row class="text-center">
			<v-col cols="12">
				<h1>Juan Diego Morales del Corral</h1>
			</v-col>
			<v-col cols="12">
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Información Personal|Personal Information")}}</strong></p>
					</v-col>
					<v-col cols="9" class="font-14 text-left">
						<p><span class="bold">{{splitLanguage("Profesión|Profession")}}</span> {{splitLanguage("Ingeniero de Sonido|Sound Engineer")}}</p>
						<p><v-icon color="black" small>mdi-map-marker</v-icon> {{address}}</p>
						<p><v-icon color="black" small>mdi-phone</v-icon> {{phone}} <v-icon color="black" small>mdi-cellphone</v-icon> {{cellphone}}</p>
						<p><v-icon color="black" small>mdi-email</v-icon> {{email}}</p>
						<p><v-icon color="black" small>mdi-card-account-details</v-icon> {{id}}</p>
						<p><v-icon color="black" small>mdi-github</v-icon> <a href="https://github.com/dyeggoM" target="_blank">dyeggoM</a></p>
						<p><v-icon color="black" small>mdi-linkedin</v-icon> <a href="https://www.linkedin.com/in/diego-m-a95033245/" target="_blank">diego-m-a95033245</a></p>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Perfíl Personal|Personal Profile")}}</strong></p>
					</v-col>
					<v-col cols="9" class="font-14 text-justify">
						<p v-for="(text,index) in personalProfile[languageId]" :key="index"><span v-if="text.show">{{text.text}}</span></p>
					</v-col>
				</v-row>
			</v-col>

			<v-col class="mb-4">
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Experiencia Profesional|Professional Experience")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<div class="flex"><hr /></div>
					</v-col>
				</v-row>
				<v-row v-for="(data, index) in professionalExperience" :key="index">
					<v-col cols="3" class="text-right" v-if="data.show">
						<p><strong>{{splitLanguage(data.date)}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left" v-if="data.show">
						<p><strong>{{splitLanguage(data.title)}}</strong></p>
						<p class="font-12 mb-1">{{data.business}}</p>
						<p v-for="(data2,index2) in data.data" :key="index2" class="font-14"><span v-if="data2.show">{{splitLanguage(data2.text)}}</span></p>
					</v-col>
				</v-row>
			</v-col>

			<v-col class="mb-4" cols="12" >
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Educación y Formación|Education and Training")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<div class="flex"><hr /></div>
					</v-col>
				</v-row>
				<v-row v-for="(data,index) in educationTraining" :key="index">
					<v-col cols="3" class="text-right" v-if="data.show">
						<p><strong>{{data.date}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left" v-if="data.show">
						<p><strong>{{splitLanguage(data.title)}}</strong></p>
						<p class="font-12 mb-1">{{splitLanguage(data.business)}}</p>
						<p v-for="(data2,index2) in data.data" :key="index2" class="font-14"><span v-if="data2.show">{{splitLanguage(data2.text)}}</span></p>
					</v-col>
				</v-row>
			</v-col>

			<v-col class="mb-4" cols="12" >
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Competencias Personales|Personal Skills")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<div class="flex"><hr /></div>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Idiomas|Languages")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<v-row no-gutters>
							<v-col cols="4"><strong>{{splitLanguage("Idioma|Language")}}</strong></v-col>
							<v-col cols="4"><strong>{{splitLanguage("Nivel|Level")}}</strong></v-col>
							<v-col cols="4"><strong>{{splitLanguage("Certificado|Certificate")}}</strong></v-col>
						</v-row>
						<v-row  no-gutters v-for="(data,index) in languageSkills" :key="index" class="font-14">
							<v-col cols="4"><p>{{splitLanguage(data.language)}}</p></v-col>
							<v-col cols="4"><p>{{splitLanguage(data.level)}}</p></v-col>
							<v-col cols="4"><p>{{splitLanguage(data.certificate)}}</p></v-col>
						</v-row>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Competencias Digitales|Digital Skills")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<v-row no-gutters>
							<v-col cols="12" v-for="(data,index) in digitalSkillsGroups" :key="`f-${index}`">
								<p v-if="data.show" class="mb-1"><strong>{{splitLanguage(data.group)}}</strong></p>
								<div v-if="data.show" class="font-14 mb-2">
									<ul v-for="(data2,index2) in findDigitalSkillsByGroup(data.group)" :key="index2">
										<li v-if="data2.show">{{data2.skill}} - <span :class="data2.sort==1?'text-success':data2.sort==2?'text-warning':data2.sort==3?'text-danger':''">{{splitLanguage(data2.level)}}</span></li>
									</ul>
								</div>
							</v-col>
						</v-row>x
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Certificados|Certificates")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<ul v-for="(data,index) in sortCertificatesByDate()" :key="index" class="font-14">
							<li v-if="data.show">{{splitLanguage(data.data)}} - {{data.date}}</li>
						</ul>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3" class="text-right">
						<p><strong>{{splitLanguage("Intereses Personales|Personal Interest")}}</strong></p>
					</v-col>
					<v-col cols="9" class="text-left">
						<ul v-for="(data,index) in personalInterests" :key="index" class="font-14">
							<li v-if="data.show">{{splitLanguage(data.data)}}</li>
						</ul>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

const VUE_APP_ADDRESS = process.env.VUE_APP_ADDRESS;
const VUE_APP_PHONE = process.env.VUE_APP_PHONE;
const VUE_APP_CELPHONE = process.env.VUE_APP_CELPHONE;
const VUE_APP_EMAIL = process.env.VUE_APP_EMAIL;
const VUE_APP_ID = process.env.VUE_APP_ID;

	import { mapState } from "vuex";
	export default {
		name: 'CV',
		mounted(){
		},
		computed:{
			...mapState([
				"languageId", 
                "personalProfile", 
                "professionalExperience", 
                "educationTraining",
                "languageSkills",
                "digitalSkillsGroups",
                "digitalSkills",
                "personalInterests",
                "certifications",
			]),
			address(){
				return VUE_APP_ADDRESS;
			},
			phone(){
				return VUE_APP_PHONE;
			},
			cellphone(){
				return VUE_APP_CELPHONE;
			},
			email(){
				return VUE_APP_EMAIL;
			},
			id(){
				return VUE_APP_ID;
			}
		},
		methods:{
			splitLanguage(string){
				return string.split("|")[this.languageId];
			},
			findDigitalSkillsByGroup(group){
				let skills = this.digitalSkills.filter(x=>x.group == group)
				return skills.sort((a,b)=> a.sort > b.sort? 1: -1 && a.skill > b.skill? 1: -1)
			},
			sortGroups(){
				let groups = this.digitalSkillsGroups.sort((a,b)=> a.group > b.group? 1: -1).filter(x=>x.show===true);
				return groups;
			},
			sortSkills(){
				let skills = this.digitalSkills.sort((a,b)=> a.group > b.group? 1: -1).filter(x=>x.show===true);
				return skills;
			},
			selectGroupBySkill(fraction){
				let skills = this.sortSkills();
				let skillsLength = Math.round(fraction*skills.length/3);
				let skillSelected = skills[skillsLength].group;
				return skillSelected
			},
            sortCertificatesByDate(){
                return this.certifications.sort((a,b)=> a.date > b.date? 1: -1)
            },

		},
	}
</script>

<style scoped>
	p{
		padding: 0px !important;
		margin: 0px !important;
	}
	.container{
		width:700px;
	}
	.text-right{
		text-align:right;
	}
	.text-left{
		text-align:left;
	}
	.text-justify{
		text-align:justify;
	}
	.bold{
		font-weight: bolder;
	}
	.flex-div{
		width:100%; 
		height:100%; 
		display:flex; 
		flex-direction:column; 
		justify-content:end;
	}
	.font-12{
		font-size:12px;
	}
	.font-14{
		font-size:14px;
	}
</style>