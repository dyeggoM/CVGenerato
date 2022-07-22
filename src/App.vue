<template>
	<v-app>
		<v-app-bar app color="primary" dark >
			<v-tooltip right >
				<template v-slot:activator="{ on, attrs }">
					<v-btn @click="copyToClipBoard" text icon v-bind="attrs" v-on="on"><v-icon>mdi-select-drag</v-icon></v-btn>
				</template>
				<span>{{splitLanguage("Copiar|Copy")}}</span>
			</v-tooltip>
			<v-spacer></v-spacer>
			<p style="margin:0px;">CV - JUAN DIEGO MORALES DEL CORRAL</p>
			<v-spacer></v-spacer>
			<div style="width:70px; height:20px;">
				<v-select :label="languageLabel[languageId]" dense :items="languages" :value="languageId" item-text="text" item-value="id" @change="changeLanguage"></v-select>
			</div>
		</v-app-bar>
		<v-main>
			<router-view/>
			<v-snackbar v-model="snackbar" :timeout="timeout" color="success" top>
				<p class="text-center" style="margin:0px;">{{splitLanguage("Copiado ES|Copied EN")}}</p>
			</v-snackbar>
		</v-main>
	</v-app>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'App',
		data: () => ({
			languageLabel:["Lenguaje", "Language"],
			languages:[{id:0,text:"ES"}, {id:1,text:"EN"}],
            snackbar:false,
            timeout: 2000,
		}),
		computed:{
			...mapState(["languageId", ])
		},
		methods:{
			...mapActions(["setMutation", ]),
			splitLanguage(string){
				return string.split("|")[this.languageId];
			},
			changeLanguage(selection){
				let language = this.languages[selection]
				this.setMutation({with:language.id,property:'languageId'})
			},
			copyToClipBoard(){
				let body = document.body, range, sel;
				let el = document.getElementById("CV");
				if (document.createRange && window.getSelection) {
					range = document.createRange();
					sel = window.getSelection();
					sel.removeAllRanges();
					try {
						range.selectNodeContents(el);
						sel.addRange(range);
					} catch (e) {
						range.selectNode(el);
						sel.addRange(range);
					}
				} else if (body.createTextRange) {
					range = body.createTextRange();
					range.moveToElementText(el);
					range.select();
				}
				document.execCommand("Copy");
				this.snackbar = true;
			},
		},
	};
</script>
